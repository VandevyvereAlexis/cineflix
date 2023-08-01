<template>
    <div class="d-flex align-items-center justify-content-center rounded-bottom" id="searchMovies">
        <h1 class="text-light">Recherche</h1>
    </div>
    <div class="mt-4" id="searchMovieInput">
        <input v-model="query" @keyup="searchMovies()">
        <SortButtons :movies="movies"/>
        <MoviesList :movies="movies"/>
    </div>
</template>

<script>

    import axios from 'axios';
    import MoviesList from './utils/MoviesList.vue';
    import SortButtons from "./utils/SortButtons.vue"


    export default {

        name: "SearchMovies",

        components: {
            SortButtons, MoviesList
        },

        data() {
            return {
                query: "",
                movies: [],
            }
        },


        methods: {
            searchMovies() {
                axios.get('https://api.themoviedb.org/3/search/movie?query=' + this.query + "&api_key=2c972f2ea32ef4add995d515d4567f25&language=fr&include_adult=false")
                .then(response => {
                    this.movies = response.data.results
                    console.log(this.movies);
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