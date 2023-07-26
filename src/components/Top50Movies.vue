<template>
    <h1>TopRatedMovies</h1>
    <MoviesList :movies="topRatedMovies"/>
</template>


<script>

    import axios from "axios"
    import MoviesList from './utils/MoviesList'

    export default {

        name: 'TopRatedMovies',

        components: {
            MoviesList
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