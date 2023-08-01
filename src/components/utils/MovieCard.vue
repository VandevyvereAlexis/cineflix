<template>

    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->

    <router-link v-bind:to="`/MovieDetails/${movie.id}`" class="link" id="movieDetail"> <!-- insert dynamique id -->

        <div class="card rounded" id="card_movie_card">
            <img class="card-img rounded" v-bind:src="urlDeBase + movie.poster_path" alt="Poster du film">
            <div class="card-img-overlay">
                <h3 v-if="$route.path == '/Top50Movies'">
                    <span class="text-light bg-dark rounded-circle fs-6 px-1 py-1 border border-light position-absolute" style="top: 5px; right: 5px; box-shadow: 1.5px 2px 2px black;" v-once>#{{ index + 1 }}</span>
                </h3>
            </div>
            <div class="card-body rounded d-flex flex-column pt-0" id="card_body">
                <h3 class="text-light fs-5 border-top">En découvrir plus</h3>
            </div>
        </div>



    </router-link>

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















<style>

    #card_movie_card {
        transition: .3s;
        overflow: hidden;
        box-shadow: 2px 5px 18px black;
    }

    #card_movie_card:hover {
        transform: scale(1.02);
        transition: .3s;
        box-shadow: 2px 5px 18px rgb(255, 255, 255);
    }

    #card_movie_card:hover > #card_movie_card:not(:hover) > img {
        filter: brightness(.5)
    }

    #card_body {
        width: 100%;
        height: 100%;
        bottom: -100%;
        position: absolute;
        background: #0000007b;
        backdrop-filter: blur(6px);
        transition: 1s;
    }

    #card_movie_card:hover #card_body {
        bottom: -91%;
    }

    @media screen and ( max-width: 992px ) {
        #card_body {
            visibility: hidden;
        }
        #card_movie_card:hover {
            transform: none;
            box-shadow: none;
        }
    }

    @media screen and ( max-width: 1195px ) {
        #card_movie_card h3 {
            font-size: 14px !important;
        }
    }

</style>