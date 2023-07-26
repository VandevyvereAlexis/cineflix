<template>
    <h1>FrenchMovies</h1>
    <MoviesList :movies="frenchMovies"/>
</template>

<script>

    import axios from "axios"
    import MoviesList from './utils/MoviesList'

    export default {

        name: 'FrenchMovies',

        components: {
            MoviesList
        },

        data() {                        // Je déclare les avriables disponibles dans un composant
            return {                    // La variable movies va contenir les films récupérés par l'appli API
                frenchMovies: []
            }
        },

        created() {

            // code déclencher avant la génération du template par vue
            // C'est ici que je vais lancer mon appel API 
            //optionss : français + popularité descr + page 1

            axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=452708e893a555f654bc722ff3f0b888&language=fr&with_original_language=fr&sort_by=primary_release_date.desc&page=1&vote_count.gte=1000")

            // .then => cas ou l'appel API a reussi et renvoi un resultat
            // .then prend en paramètre uen fonction félchée anonyme. res = réponse de l'API

            .then(response => {
                this.frenchMovies = response.data.results             // Je stocke mes films récupérés dans la variable movies des data
                console.log(this.frenchMovies)
            })

            // .catch => cas ou l'appel échoue

            .catch(() => this.error = true)

        }
    }
</script>

