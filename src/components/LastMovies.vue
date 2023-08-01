<template>
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="lastMovies">
        <h1 class="text-light">Cette année</h1>
    </div>
    <SortButtons :movies="lastMovies"/>
    <MoviesList :movies="lastMovies"/>
</template>

<script>

    import axios from "axios"
    import MoviesList from './utils/MoviesList'
    import SortButtons from "./utils/SortButtons.vue"

    export default {

        name: 'LastMovies',

        components: {
            MoviesList, SortButtons
        },

        data() {                        // Je déclare les avriables disponibles dans un composant
            return {                    // La variable movies va contenir les films récupérés par l'appli API
                lastMovies: []
            }
        },

        created() {

            // code déclencher avant la génération du template par vue
            // C'est ici que je vais lancer mon appel API 
            //optionss : français + popularité descr + page 1

            axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&sort_by=primary_release_date.desc&page=1&primary_release_year=2022&vote_count.gte=1000")

            // .then => cas ou l'appel API a reussi et renvoi un resultat
            // .then prend en paramètre uen fonction félchée anonyme. res = réponse de l'API

            .then(response => {
                this.lastMovies = response.data.results             // Je stocke mes films récupérés dans la variable movies des data
                console.log(this.lastMovies)
            })

            // .catch => cas ou l'appel échoue

            .catch(() => this.error = true)

        }
    }
</script>




<style>
#lastMovies {
    background-image: url(../assets/fond.jpg);
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

#lastMovies h1 {
    font-size: 10rem;
    text-shadow: 10px 10px 0px rgb(0, 0, 0);
    letter-spacing: 5px;
}

@media screen and (max-width: 992px) {
    #lastMovies h1 {
        font-size: 4.5rem;
        text-shadow: 4px 5px 0px rgb(0, 0, 0);
    }
}
</style>