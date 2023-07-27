<template>
    <h1>SearchMovies</h1>
    <input v-model="query" @keyup="searchMovies()">
    <MoviesList :movies="movies"/>
</template>

<script>

    import axios from 'axios';
    import MoviesList from './utils/MoviesList.vue';


    export default {

        name: "SearchMovies",

        data() {
            return {
                query: "",
                movies: [],
            }
        },

        components: {
            MoviesList
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