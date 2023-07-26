<template>
  <div id="app">
    <HeaderNav/>

    <!-- si la route est / ( racine du site ) -->
    <div v-if="$route.path == '/'">

      <!-- j'affiche le titre de l'accueil et sa selection de films (les + populaires) -->
      <h1 class="p-5 font-weight-light">
        Vos films préférés sont sur VueJS Movies !
      </h1>

      <!-- en cas d'erreur de l'appel API -->
      <div v-if="error">
        <p class="bg-danger text-white p-5 fs-6 mx-auto">Une erreur est survenue. Merci de recharger la page ou de réessayer plus atrd</p>
      </div>

      <!-- si appel API OK  -->
      <div v-else>
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

  export default {

    name: 'App',

    components: {
      FooterApp, HeaderNav, MoviesList
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
</style>
