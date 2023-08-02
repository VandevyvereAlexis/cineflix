<template>

    <!-- Section titre -->
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="frenchMovies">
        <!-- Titre -->
        <h1 class="text-light">Films Français</h1>
    </div>

    <!-- Ici, nous utilisons les composants personnalisés "SortButtons" et "MoviesList" pour afficher une liste de films français spécifiques. -->
    <!-- Le composant "SortButtons" est utilisé pour fournir des boutons de tri, permettant aux utilisateurs de trier les films par titre, date de sortie ou note moyenne. Nous passons la liste de films "frenchMovies" à ce composant via la propriété ":movies". Cela permettra au composant "SortButtons" d'accéder à cette liste de films et d'effectuer le tri en fonction des interactions de l'utilisateur. -->
    <SortButtons :movies="frenchMovies" />
    <!-- Le composant "MoviesList" est utilisé pour afficher la liste de films français triée ou non triée. Nous passons également la liste de films "frenchMovies" à ce composant via la propriété ":movies". Ce composant affichera simplement les films dans l'ordre fourni sans effectuer de tri initial, car le tri sera géré par le composant "SortButtons". -->
    <MoviesList :movies="frenchMovies" />
</template>










<script>
    // Dans cette partie, nous importons les dépendances nécessaires, notamment le module "axios" pour effectuer des requêtes HTTP,
    // ainsi que les composants personnalisés "MoviesList" et "SortButtons" depuis leurs fichiers respectifs.

    import axios from "axios"
    import MoviesList from './utils/MoviesList'
    import SortButtons from "./utils/SortButtons.vue"

    export default {

        // Le nom du composant est défini ici en tant que "FrenchMovies".
        name: 'FrenchMovies',

        // Dans la section "components", nous enregistrons les composants personnalisés "MoviesList" et "SortButtons"
        // pour pouvoir les utiliser dans ce composant "FrenchMovies".
        components: {
            MoviesList, SortButtons
        },

        // Dans la section "data", nous déclarons les variables disponibles dans le composant.
        data() {      
            // La variable "frenchMovies" sera utilisée pour stocker les films français récupérés à partir de l'API.
            // Elle est initialement définie comme un tableau vide et sera remplie lorsque les données seront récupérées.                 
            return {                   
                frenchMovies: []
            }
        },

        created() {

            // Cette méthode "created()" est un "hook" du cycle de vie de Vue.js, qui est appelé avant la génération du template par Vue.

            // Ici, nous allons effectuer un appel à l'API pour récupérer les films français selon certaines options spécifiées.
            // Nous utilisons la bibliothèque "axios" pour effectuer la requête HTTP GET à l'API.

            axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=452708e893a555f654bc722ff3f0b888&language=fr&with_original_language=fr&sort_by=primary_release_date.desc&page=1&vote_count.gte=1000")

            // Lorsque l'appel API réussit, le bloc "then" est exécuté avec la réponse (response) de l'API.
            .then(response => {
                // Nous stockons les films récupérés dans la variable "frenchMovies" de la section "data".
                // La propriété "results" de la réponse contient la liste des films renvoyés par l'API.
                this.frenchMovies = response.data.results             
                console.log(this.frenchMovies)
            })

            // En cas d'échec de l'appel API, le bloc "catch" est exécuté.
            .catch(() => this.error = true)
        }

    }
</script>










<style>
    #frenchMovies {
        background-image: url(../assets/fond.jpg);
        height: 50vh;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    #frenchMovies h1 {
        font-size: 10rem;
        text-shadow: 10px 10px 0px rgb(0, 0, 0);
        letter-spacing: 5px;
    }

    @media screen and (max-width: 992px) {
        #frenchMovies h1 {
            font-size: 4.5rem;
            text-shadow: 4px 5px 0px rgb(0, 0, 0);
        }
    }
</style>
