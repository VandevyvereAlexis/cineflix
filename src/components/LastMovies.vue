<template>
    <h1>LastMovies</h1>
    <MoviesList :movies="lastMovies"/>
</template>

<script>

    import axios from "axios"
    import MoviesList from './utils/MoviesList'

    export default {

        name: 'LastMovies',

        components: {
            MoviesList
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