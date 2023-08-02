<template>
  <div id="app" class="mt-0">
    <!-- Inclusion du composant personnalisé HeaderNav pour afficher la barre de navigation -->
    <HeaderNav/>

    <!-- Vérification si la route est la racine du site ("/") -->
    <div v-if="$route.path == '/'">

      <!-- Section titre -->
      <div class="d-flex align-items-center justify-content-center rounded-bottom" id="titre_app">
        <!-- Titre -->
        <h1 class="text-light">CineFlix</h1>
      </div>

      <!-- Vérification si une erreur d'appel API s'est produite -->
      <div v-if="error">
        <p class="bg-danger text-white p-5 fs-6 mx-auto">Une erreur est survenue. Merci de recharger la page ou de réessayer plus atrd</p>
      </div>

      <!-- Sinon, si l'appel API a réussi, affiche la liste des films les plus populaires -->
      <div v-else>
        <!-- Utilisation du composant personnalisé SortButtons pour gérer les boutons de tri avec la liste de films populaires -->
        <SortButtons :movies="popularMovies"/>
        <!-- Utilisation du composant personnalisé MoviesList pour afficher la liste de films populaires avec une boucle v-for -->
        <!-- La liste de films populaires est passée en tant que prop "movies" -->
        <MoviesList :movies="popularMovies"/>
      </div>

    </div>

    <!-- Si la route n'est pas la racine du site, affiche le contenu du composant correspondant à la route -->
    <div v-else>
      <!-- Le composant personnalisé concerné par la route est affiché ici (ex: FrenchMovies) -->
      <!-- Le composant est affiché dynamiquement en fonction de la route active -->
      <router-view v-bind:key="$route.fullPath"></router-view>
    </div>

    <!-- Inclusion du composant personnalisé FooterApp pour afficher le pied de page -->
    <FooterApp/>

  </div>
</template>










<script>
  // Dans cette partie du script, nous importons les dépendances nécessaires (axios, HeaderNav, FooterApp, MoviesList et SortButtons) et définissons le composant principal "App".

  // Le composant "App" est le composant principal de l'application Vue.js.

  import axios from "axios"                                       // Import de la dépendance axios pour effectuer des requêtes HTTP.
  import HeaderNav from './components/template/HeaderNav'         // Import du composant personnalisé HeaderNav pour afficher la barre de navigation.
  import FooterApp from './components/template/FooterApp'         // Import du composant personnalisé FooterApp pour afficher le pied de page.
  import MoviesList from './components/utils/MoviesList'          // Import du composant personnalisé MoviesList pour afficher la liste de films.
  import SortButtons from "./components/utils/SortButtons.vue"    // Import du composant personnalisé SortButtons pour gérer les boutons de tri.

  export default {

    name: 'App',    // Nom du composant principal défini comme "App".

    components: {
      FooterApp,    // Utilisation du composant "HeaderNav" dans le template.
      HeaderNav,    // Utilisation du composant "FooterApp" dans le template.
      MoviesList,   // Utilisation du composant "MoviesList" dans le template.
      SortButtons,  // Utilisation du composant "SortButtons" dans le template.
    },

    data() {         
      return {        
        popularMovies: []   // Variable "popularMovies" pour stocker les films populaires récupérés depuis l'API.
      }
    },

    created() {
      // Méthode "created()" utilisée pour effectuer un appel API et récupérer les films populaires depuis l'API TMDb.

      // L'API TMDb est interrogée avec les options pour récupérer les films en français, triés par popularité, et depuis la première page.
      // Les résultats de l'appel API sont stockés dans la liste "popularMovies".

      // Assurez-vous que l'URL de l'API utilisée dans l'appel axios est correcte et qu'elle renvoie les résultats de films populaires selon le classement de popularité.

      axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr&sort_by=popularity.desc&page=1")
      .then( response => {
        // Lorsque l'appel API réussit, nous mettons à jour la liste de films "popularMovies" avec les résultats de l'appel API.
        // Les résultats des films populaires se trouvent dans "response.data.results".
        this.popularMovies = response.data.results 
        console.log(this.popularMovies)   // Affichage des résultats de films populaires dans la console à des fins de débogage.
      })

      .catch(() => this.error = true)   // Gestion des erreurs en cas d'échec de l'appel API.
    }

  }
</script>










<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } 

  #titre_app {
    background-image: url(./assets/fond.jpg);
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #titre_app h1 {
    font-size: 10rem;
    text-shadow: 10px 10px 0px rgb(0, 0, 0); 
    letter-spacing:20px;
  }

  @media screen and ( max-width: 992px ) {
    #titre_app h1 {
      font-size: 4.5rem;
      text-shadow: 4px 5px 0px rgb(0, 0, 0); 
    }
  }
</style>
