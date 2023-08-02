<template>
    <!-- Section titre -->
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="lastMovies">
        <!-- Titre -->
        <h1 class="text-light">Cette année</h1>
    </div>

    <!-- Ici, nous utilisons les composants personnalisés "SortButtons" et "MoviesList" pour afficher une liste des derniers films. -->
    <!-- Le composant "SortButtons" est utilisé pour fournir des boutons de tri, permettant aux utilisateurs de trier les films par titre, date de sortie ou note moyenne. Nous passons la liste de films "lastMovies" à ce composant via la propriété ":movies". Cela permettra au composant "SortButtons" d'accéder à cette liste de films et d'effectuer le tri en fonction des interactions de l'utilisateur. -->
    <SortButtons :movies="lastMovies"/>
    <!-- Le composant "MoviesList" est utilisé pour afficher la liste des derniers films triée ou non triée. Nous passons également la liste de films "lastMovies" à ce composant via la propriété ":movies". Ce composant affichera simplement les films dans l'ordre fourni sans effectuer de tri initial, car le tri sera géré par le composant "SortButtons". -->
    <MoviesList :movies="lastMovies"/>
</template>










<script>
    // Dans cette partie, nous importons les dépendances nécessaires, notamment le module "axios" pour effectuer des requêtes HTTP,
    // ainsi que les composants personnalisés "MoviesList" et "SortButtons" depuis leurs fichiers respectifs.

    import axios from "axios"
    import MoviesList from './utils/MoviesList'
    import SortButtons from "./utils/SortButtons.vue"

    export default {

        // Le nom du composant est défini ici en tant que "LastMovies".
        name: 'LastMovies',

        // Dans la section "components", nous enregistrons les composants personnalisés "MoviesList" et "SortButtons"
        // pour pouvoir les utiliser dans ce composant "LastMovies".
        components: {
            MoviesList, SortButtons
        },

        // Dans la section "data", nous déclarons les variables disponibles dans le composant.
        data() {   
            // La variable "lastMovies" sera utilisée pour stocker les derniers films récupérés à partir de l'API.
            // Elle est initialement définie comme un tableau vide et sera remplie lorsque les données seront récupérées.                    
            return {                  
                lastMovies: []
            }
        },

        created() {

            // Cette méthode "created()" est un "hook" du cycle de vie de Vue.js, qui est appelé avant la génération du template par Vue.

            // Ici, nous allons effectuer un appel à l'API pour récupérer les derniers films sortis en 2022 selon certaines options spécifiées.
            // Nous utilisons la bibliothèque "axios" pour effectuer la requête HTTP GET à l'API.

            axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&sort_by=primary_release_date.desc&page=1&primary_release_year=2022&vote_count.gte=1000")

            // Lorsque l'appel API réussit, le bloc "then" est exécuté avec la réponse (response) de l'API.
            .then(response => {
                // Nous stockons les films récupérés dans la variable "lastMovies" de la section "data".
                // La propriété "results" de la réponse contient la liste des films renvoyés par l'API.
                this.lastMovies = response.data.results             
                console.log(this.lastMovies)
            })

            // En cas d'échec de l'appel API, le bloc "catch" est exécuté.
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