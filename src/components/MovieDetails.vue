<template>

    <div id="titre_movie_details" class="pt-5">

        <div class="container-fluid">
            <div class="row">

                <div class="col-md-6 text-center">
                    <img class="img-fluid rounded-start rounded w-50" v-bind:src="urlDeBase + movieDetails.poster_path" alt="Poster du film">

                </div>


                <div class="col-md-6">
                    <div class="video-wrapper" id="trailer" v-if="video[0]">
                        <iframe width="560" height="315" v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="shadow embed-responsive-item" id="video_movie_details"></iframe>
                    </div>
                </div>

                    <h1>{{ movieDetails.title }}</h1>
                    <p>{{ movieDetails.overview }}</p>
                    <p>note moyenne : {{ movieDetails.vote_average }}</p>
                    <p>{{ movieDetails.votes_count }} votes</p>

            </div>
        </div>
    </div>

</template>







<script>

import axios from "axios"

export default {
    name: "MovieDetails",

    data() {                        // Je déclare les avriables disponibles dans un composant
        return {                    // La variable movies va contenir les films récupérés par l'appli API
            movieDetails: [],
            urlDeBase: "https://image.tmdb.org/t/p/original/",
            video: [],
        }
    },

    created() {
        axios.get(
            "https://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr"
        )

        .then(response => {
            this.movieDetails = response.data
            console.log(this.movieDetails)
        })

        axios.get(
            "https://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "/videos?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr"
        )

        .then((response) => {
            this.video = response.data.results;
            console.log(this.video);
        });
    }

}

</script>                     



<style>
#titre_movie_details {
    background-image: url(../assets/fond2.jpg);
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

#video_movie_details {
    width: 50rem auto;
    height: 25rem auto;
}

.embed-responsive {
    overflow: hidden;
}
</style>