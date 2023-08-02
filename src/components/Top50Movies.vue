<template>
    <!-- Section titre -->
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="topMovies">
        <!-- Titreitre -->
        <h1 class="text-light">Top 50</h1>
    </div>

    <!-- Ici, nous utilisons le composant personnalisé "SortButtons" pour afficher des boutons de tri pour les films les mieux notés. La balise "SortButtons" est utilisée pour insérer 
    le composant "SortButtons" dans le template Vue.js. La propriété ":movies" est utilisée pour passer la liste de films "topRatedMovies" en tant que prop au composant "SortButtons".
    Assurez-vous que le composant "SortButtons" est correctement importé dans ce fichier ou qu'il est accessible dans le contexte actuel. La liste de films "topRatedMovies" doit être 
    correctement définie dans les données du composant parent. Le composant "SortButtons" est responsable de gérer les boutons de tri pour les films, tandis que le composant parent peut 
    utiliser les événements émis par "SortButtons" pour mettre à jour la liste de films triée selon le classement des films. -->
    <SortButtons :movies="topRatedMovies"/>
    <!-- Ici, nous utilisons le composant personnalisé "MoviesList" pour afficher une liste de films les mieux notés. La balise "MoviesList" est utilisée pour insérer le composant 
    "MoviesList" dans le template Vue.js. La propriété ":movies" est utilisée pour passer la liste de films "topRatedMovies" en tant que prop au composant "MoviesList". Assurez-vous que le 
    composant "MoviesList" est correctement importé dans ce fichier ou qu'il est accessible dans le contexte actuel. La liste de films "topRatedMovies" doit être correctement définie dans 
    les données du composant parent. Le composant "MoviesList" est responsable de la présentation et de l'affichage des films dans une liste. Il peut utiliser la liste de films 
    "topRatedMovies" passée en prop pour itérer sur les films et afficher les détails de chaque film à l'aide de la boucle "v-for". -->
    <MoviesList :movies="topRatedMovies"/>
</template>










<script>
    // Dans cette partie du script, nous importons les dépendances nécessaires (axios, MoviesList et SortButtons) et définissons le composant "TopRatedMovies".

    // Le composant "TopRatedMovies" est responsable de l'affichage des films les mieux notés en utilisant l'API TMDb.

    import axios from "axios"                           // Import de la dépendance axios pour effectuer des requêtes HTTP.
    import MoviesList from './utils/MoviesList'         // Import du composant personnalisé MoviesList pour afficher la liste de films.
    import SortButtons from "./utils/SortButtons.vue"   // Import du composant personnalisé SortButtons pour gérer les boutons de tri.

    export default {

        name: 'TopRatedMovies',                         // Nom du composant défini comme "TopRatedMovies".

        components: {
            MoviesList,                                 // Utilisation du composant "MoviesList" dans le template.
            SortButtons                                 // Utilisation du composant "SortButtons" dans le template.
        },

        data() {                      
            return {                  
                topRatedMovies: []                      // Variable "topRatedMovies" pour stocker les films les mieux notés récupérés depuis l'API.
            }
        },


        // Dans cette partie du script, nous utilisons la méthode "created()" pour effectuer des appels API et récupérer les films les mieux notés.

        // L'API TMDb est interrogée à trois reprises avec différentes pages pour récupérer les films les mieux notés.
        // Les résultats des appels API sont concaténés pour obtenir une liste de films complète.
        // Enfin, la liste de films est tronquée pour ne conserver que les 50 premiers films les mieux notés.

        // Assurez-vous que l'URL de l'API utilisée dans les appels axios est correcte et qu'elle renvoie les résultats de films les mieux notés selon le classement de vote.
        created() {

             // Appel API pour récupérer la première page des films les mieux notés.
            axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc")
            .then(response => {
                this.topRatedMovies = response.data.results     // Mise à jour de la liste de films les mieux notés avec les résultats de la première page.  
                console.log(this.topRatedMovies)

                // Appel API pour récupérer la deuxième page des films les mieux notés.
                axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=2")
                .then(response => {
                    this.topRatedMovies = this.topRatedMovies.concat(response.data.results)     // Concaténation des résultats de la deuxième page avec la liste existante.     
                    console.log(this.topRatedMovies)
                    
                    // Appel API pour récupérer la troisième page des films les mieux notés.
                    axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=3")
                    .then(response => {
                        this.topRatedMovies = this.topRatedMovies.concat(response.data.results)     // Concaténation des résultats de la troisième page avec la liste existante.
                        this.topRatedMovies = this.topRatedMovies.slice(0,50)                       // Tronquer la liste pour ne conserver que les 50 premiers films les mieux notés.
                    })
                })

            })

            .catch(() => this.error = true)     // Gestion des erreurs en cas d'échec des appels API.

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