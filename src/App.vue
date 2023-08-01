<template>

  <div id="app" class="mt-0">
    <HeaderNav/>

    <!-- si la route est / ( racine du site ) -->
    <div v-if="$route.path == '/'">

      <!-- j'affiche le titre de l'accueil et sa selection de films (les + populaires) -->
      <div class="d-flex align-items-center justify-content-center rounded-bottom" id="titre_app">
        <h1 class="text-light">CineFlix</h1>
      </div>

      <!-- en cas d'erreur de l'appel API -->
      <div v-if="error">
        <p class="bg-danger text-white p-5 fs-6 mx-auto">Une erreur est survenue. Merci de recharger la page ou de réessayer plus atrd</p>
      </div>

      <!-- si appel API OK  -->
      <div v-else>
        <SortButtons :movies="popularMovies"/>
        <!-- MoviesList affiche les films grâce à une boucle v-for -->
        <!-- v-bind : prop attendue = variable des datas (liste de films) -->
        <MoviesList :movies="popularMovies"/>
      </div>

    </div>

    <div v-else>
      <!-- j'affiche le template du composant concerné par la route (ex: FrenchMovies) -->
      <router-view v-bind:key="$route.fullPath"></router-view>

    </div>

    <FooterApp/>
  </div>
</template>






<script>
  // import d'axios pour pouvoir faire des appels API 
  import axios from "axios"
  import HeaderNav from './components/template/HeaderNav'
  import FooterApp from './components/template/FooterApp'
  import MoviesList from './components/utils/MoviesList'
  import SortButtons from "./components/utils/SortButtons.vue"

  export default {

    name: 'App',

    components: {
      FooterApp, HeaderNav, MoviesList, SortButtons
    },

    data() {          // Je déclare les avriables disponibles dans un composant
      return {        // La variable movies va contenir les films récupérés par l'appli API
        popularMovies: []
      }
    },

    created() {
      // code déclencher avant la génération du template par vue
      // C'est ici que je vais lancer mon appel API 
                                                                                                      //optionss : français + popularité descr + page 1
      axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr&sort_by=popularity.desc&page=1")
      // .then => cas ou l'appel API a reussi et renvoi un resultat
      // .then prend en paramètre uen fonction félchée anonyme. res = réponse de l'API
      .then( response => {
        this.popularMovies = response.data.results    // Je stocke mes films récupérés dans la variable movies des data
        console.log(this.popularMovies)
      })
      // .catch => cas ou l'appel échoue
      .catch(() => this.error = true)

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
