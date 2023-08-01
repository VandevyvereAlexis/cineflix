<template>
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="topMovies">
        <h1 class="text-light">Top 50</h1>
    </div>
    <SortButtons :movies="topRatedMovies"/>
    <MoviesList :movies="topRatedMovies"/>
</template>


<script>

    import axios from "axios"
    import MoviesList from './utils/MoviesList'
    import SortButtons from "./utils/SortButtons.vue"

    export default {

        name: 'TopRatedMovies',

        components: {
            MoviesList, SortButtons
        },

        data() {                        // Je déclare les avriables disponibles dans un composant
            return {                    // La variable movies va contenir les films récupérés par l'appli API
                topRatedMovies: []
            }
        },

        created() {

            // code déclencher avant la génération du template par vue
            // C'est ici que je vais lancer mon appel API 
            //options : français + popularité descr + page 1

            axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc")

            // .then => cas ou l'appel API a reussi et renvoi un resultat
            // .then prend en paramètre uen fonction félchée anonyme. res = réponse de l'API

            .then(response => {

                this.topRatedMovies = response.data.results             // Je stocke mes films récupérés dans la variable movies des data
                console.log(this.topRatedMovies)
                axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=2")

                .then(response => {
                    this.topRatedMovies = this.topRatedMovies.concat(response.data.results)            // Je stocke mes films récupérés dans la variable movies des data
                    console.log(this.topRatedMovies)
                    
                    axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=3")
                    .then(response => {
                        this.topRatedMovies = this.topRatedMovies.concat(response.data.results) 
                        this.topRatedMovies = this.topRatedMovies.slice(0,50)
                    })
                })

            })

            // .catch => cas ou l'appel échoue

            .catch(() => this.error = true)

        }
    }

</script>


<style>
#topMovies {
    background-image: url(../assets/fond.jpg);
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

#topMovies h1 {
    font-size: 10rem;
    text-shadow: 10px 10px 0px rgb(0, 0, 0);
    letter-spacing: 5px;
}

@media screen and (max-width: 992px) {
    #topMovies h1 {
        font-size: 4.5rem;
        text-shadow: 4px 5px 0px rgb(0, 0, 0);
    }
}
</style>