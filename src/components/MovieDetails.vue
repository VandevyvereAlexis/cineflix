<template>
    
    <div class="container-fluid" id="titre_movie_details">
        <div class="row d-flex align-items-center justify-content-center" id="section">
            <div class="col-md-6">
                <p class="text-light"> Genres : <span v-for="genre in movieDetails.genres" :key="genre.id" class="badge bg-dark border">{{ genre.name }}</span></p>
                <div class="card w-50 mx-auto" id="card_details">
                    <img class="card-img rounded" v-bind:src="urlDeBase + movieDetails.poster_path" alt="Poster du film" style="box-shadow: 1px 5px 10px black;">
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
                <div class="card w-75 text-light text-start p-3" id="card_infos"  style="box-shadow: 1px 5px 10px black;">
                    <h1 class="mb-4">{{ movieDetails.title }} <small class="fs-4">{{ movieDetails.tagline }}</small></h1>
                    <p class="fs-5" style="font-weight: 300; text-shadow: 2px 2px 15px black;">{{ movieDetails.overview }}</p>
                    <p class="mt-4" style="font-weight: 300; text-shadow: 2px 2px 15px black;">note moyenne : {{ movieDetails.vote_average }}</p>
                </div>
            </div>
        </div>
        <div class="row pb-5">
            <div class="col">
                <div class="video-wrapper mx-auto" id="trailer" v-if="video[0]">
                    <iframe width="100%" v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="shadow-lg rounded" id="video_movie_details"></iframe>
                </div>
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
    background-image: linear-gradient(to right, #00000025, #ffffff16), url(../assets/fond2.jpg);
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

#titre_movie_details {
    min-height: 95vh;
}

#section {
    min-height: 100vh;
}

/* video */
#video_movie_details {
    width: 50rem auto;
    height: 25rem auto;
}

#trailer {
    width: 50%;
}

#trailer iframe {
    aspect-ratio: 16/9;
    box-shadow: 1px 5px 10px rgb(0, 0, 0);
}

#card_infos {
    background-color: rgba(0, 0, 0, 0.419);
    backdrop-filter: blur(7px);
}


@media screen and (max-width: 1326px) {
    #section {
        flex-direction: column;
    }

    #titre_movie_details {
        padding-top: 7rem;
    }

    #card_details {
        width: 70% !important;
        margin-bottom: 3rem;
    }

    #card_infos {
        margin-bottom: 3rem;
    }

    #trailer {
        margin-bottom: 3rem;
    }
}

@media screen and (max-width: 992px) {

    #trailer iframe {
        margin-top: 3rem;
    }

    #trailer {
        width: 95%;
    }

    #card_infos {
        width: 100% !important;
    }
}
</style>