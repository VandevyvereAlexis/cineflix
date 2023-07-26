<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->

    <div class="card text-center">

        <div class="card-header">

            <h3 v-if="$route.path == '/Top50Movies'">
                <span v-once>#{{ index + 1 }}</span>
            </h3>
            <p>{{ movie.title }}</p>

        </div>

        <div class="card-body">
            <img class="img-fluid rounded-start" v-bind:src="urlDeBase + movie.poster_path" alt="Poster du film">
        </div>

        <div class="card-footer text-body-secondary" style="height: 15rem;">
            <p>{{ movie.overview.substring(0, 200) + "..." }}</p>
            <p>note moyenne : {{ movie.vote_average }}</p>
            <p>{{ movie.votes_count }} votes</p>
        </div>

    </div>

    

</template>

<script>
export default {
    name: "MovieCard",
    props : [
        "movie",
        "index"
    ],

    data() {
            // url de base des images de TMDM
            return{
                urlDeBase: "https://image.tmdb.org/t/p/original/"
            }
        },
}
</script>