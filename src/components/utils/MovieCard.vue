<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->

    
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="img-fluid rounded-start w-100" v-bind:src="urlDeBase + movie.poster_path" alt="Poster du film">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <p>{{ movie.title }}</p>
                    <p>{{ movie.overview.substring(0, 200) + "..." }}</p>
                    <p>note moyenne : {{ movie.vote_average }}</p>
                    <p>{{ movie.votes_count }} votes</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "MovieCard",
    props : ['movie'],

    data() {
            // url de base des images de TMDM
            return{
                urlDeBase: "https://image.tmdb.org/t/p/original/"
            }
        },
}
</script>