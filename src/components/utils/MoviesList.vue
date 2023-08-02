<template>
    <!-- Container accueil -->
    <div class="container-fluid col-md-10 col-sm-11">
        <div class="row">

            <!-- Cette balise div utilise une boucle "v-for" pour itérer sur la liste des films dans l'objet "movies". Pour chaque film, le composant "MovieCard" est affiché avec les données du film et son index passé en tant que props.  La directive "v-bind:key" est utilisée pour attribuer l'ID du film comme clé pour aider Vue.js à suivre les éléments de la liste correctement. -->
            <div v-for="(movie, index) in movies" v-bind:key="movie.id" class="col-lg-2 col-md-4 col-sm-6 mb-4">

                <!-- Le composant "MovieCard" est appelé avec les props ":movie" et ":index" pour passer les données du film et son index dans la liste à chaque instance du composant. -->
                <MovieCard :movie="movie" :index="index"/>

            </div>


        </div>
    </div>
</template>










<script>
    // Import du composant "MovieCard" depuis le fichier "MovieCard.vue".
    import MovieCard from './MovieCard'

    export default {

        // Le nom du composant est défini ici en tant que "MoviesList".
        name: "MoviesList", 

        // Dans la section "components", nous enregistrons le composant "MovieCard" pour pouvoir l'utiliser dans ce composant "MoviesList".
        components: {
            MovieCard
        },

        // Les propriétés (props) de ce composant sont définies dans la section "props".
        // Dans ce cas, le composant parent peut passer une liste de films (tableau d'objets) via la propriété "movies".
        props : ["movies"]
    }
</script>   