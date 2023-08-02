<template>
    <!-- Section titre -->
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="searchMovies">
        <!-- Titre -->
        <h1 class="text-light">Recherche</h1>
    </div>

    <!-- Section recherche + trie -->
    <div class="mt-4" id="searchMovieInput">
        <!-- Ici, nous utilisons une entrée de texte avec la directive "v-model" pour lier dynamiquement la valeur de l'entrée de texte à la variable "query" dans les données du composant.
        L'attribut "v-model" permet de créer une liaison bidirectionnelle entre la valeur de l'entrée de texte et la variable "query". Cela signifie que lorsque vous tapez du texte dans l'entrée, 
        la valeur de la variable "query" est automatiquement mise à jour pour refléter le contenu de l'entrée. De même, si vous mettez à jour la valeur de la variable "query" dans le code, cela 
        se reflétera automatiquement dans l'entrée de texte. L'événement "@keyup" est utilisé pour détecter quand une touche du clavier est relâchée après avoir tapé du texte dans l'entrée. 
        Lorsque cela se produit, la méthode "searchMovies()" est appelée pour effectuer une recherche de films en utilisant la valeur actuelle de la variable "query". Assurez-vous de définir 
        correctement la variable "query" dans les données du composant, qui servira à stocker le texte entré par l'utilisateur pour la recherche de films. Implémentez la méthode "searchMovies()" 
        pour effectuer la recherche de films en utilisant la valeur de la variable "query" et mettez à jour la liste de films à afficher en fonction des résultats de la recherche. Vous pouvez 
        également ajouter d'autres événements tels que "@keydown" ou "@input" pour personnaliser le comportement de l'entrée de texte en fonction de vos besoins spécifiques. -->
        <input v-model="query" @keyup="searchMovies()">
        <!-- Ici, nous utilisons le composant personnalisé "SortButtons" pour afficher des boutons de tri. La balise "SortButtons" est utilisée pour insérer le composant "SortButtons" dans le template 
        Vue.js. La propriété ":movies" est utilisée pour passer la liste de films "movies" en tant que prop au composant "SortButtons". Assurez-vous que le composant "SortButtons" est correctement importé 
        dans ce fichier ou qu'il est accessible dans le contexte actuel. La liste de films "movies" doit être correctement définie dans les données du composant parent. Le composant "SortButtons" est 
        responsable de gérer les boutons de tri pour les films, tandis que le composant parent peut utiliser les événements émis par "SortButtons" pour mettre à jour la liste de films triée. -->
        <SortButtons :movies="movies"/>
        <!-- Ici, nous utilisons le composant personnalisé "MoviesList" pour afficher une liste de films. La balise "MoviesList" est utilisée pour insérer le composant "MoviesList" dans le template Vue.js.
        La propriété ":movies" est utilisée pour passer la liste de films "movies" en tant que prop au composant "MoviesList". Assurez-vous que le composant "MoviesList" est correctement importé dans ce 
        fichier ou qu'il est accessible dans le contexte actuel. La liste de films "movies" doit être correctement définie dans les données du composant parent. Le composant "MoviesList" est responsable 
        de la présentation et de l'affichage des films dans une liste. Il peut utiliser la liste de films "movies" passée en prop pour itérer sur les films et afficher les détails de chaque film à l'aide 
        de la boucle "v-for". -->
        <MoviesList :movies="movies"/>
    </div>
</template>










<script>
    // Dans cette partie du script, nous importons les dépendances nécessaires (axios, MoviesList et SortButtons) et définissons le composant "SearchMovies".

    // Le composant "SearchMovies" est responsable de la recherche de films en utilisant l'API TMDb.

    import axios from 'axios';                          // Import de la dépendance axios pour effectuer des requêtes HTTP.
    import MoviesList from './utils/MoviesList.vue';    // Import du composant personnalisé MoviesList pour afficher la liste de films.
    import SortButtons from "./utils/SortButtons.vue"   // Import du composant personnalisé SortButtons pour gérer les boutons de tri.


    export default {

        name: "SearchMovies",   // Nom du composant défini comme "SearchMovies".

        components: {
            SortButtons,        // Utilisation du composant "SortButtons" dans le template.
            MoviesList,         // Utilisation du composant "MoviesList" dans le template.
        },

        data() {
            return {
                query: "",      // Variable "query" pour stocker le texte de la recherche saisi par l'utilisateur.
                movies: [],     // Variable "movies" pour stocker les résultats de la recherche de films.
            }
        },


        methods: {
            searchMovies() {
                // Méthode "searchMovies()" utilisée pour effectuer la recherche de films en utilisant l'API TMDb.

                // Nous utilisons axios pour effectuer une requête GET à l'API TMDb avec le texte de recherche saisi par l'utilisateur (this.query).
                // L'API TMDb est interrogée pour les films dont le titre contient le texte de recherche saisi.
                // Nous utilisons également notre clé d'API pour accéder aux données de l'API.
                axios.get('https://api.themoviedb.org/3/search/movie?query=' + this.query + "&api_key=2c972f2ea32ef4add995d515d4567f25&language=fr&include_adult=false")
                .then(response => {
                    // Lorsque l'appel API réussit, nous mettons à jour la liste de films "movies" avec les résultats de recherche récupérés depuis l'API.
                    // Les résultats de recherche se trouvent dans "response.data.results".
                    this.movies = response.data.results
                    console.log(this.movies);   // Affichage des résultats de recherche dans la console à des fins de débogage.
                })
            }
        }

    }
</script>










<style>
    #searchMovies {
        background-image: url(../assets/fond.jpg);
        height: 50vh;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    #searchMovies h1 {
        font-size: 10rem;
        text-shadow: 10px 10px 0px rgb(0, 0, 0);
        letter-spacing: 5px;
    }

    #searchMovieInput {
        min-height: 45vh;
        }

    @media screen and (max-width: 992px) {
        #searchMovies h1 {
            font-size: 4.5rem;
            text-shadow: 4px 5px 0px rgb(0, 0, 0);
        }
    }
</style>