<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->

    <div class="container-fluid">
        <div class="row">
            <div v-for="movie in movies" v-bind:key="movie.id" class="ccol-lg-4 col-md-4 col-sm-6 mb-4"> 
                <MovieCard :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieCard from './MovieCard'

    export default {

        name: "MoviesList", 

        components: {
            MovieCard
        },

        // liste de films à afficher, fournie par le parent
        props : ["movies"]
    }
</script>   