<template>
    <!-- Container détails film -->
    <div class="container-fluid" id="titre_movie_details">
        <div class="row d-flex align-items-center justify-content-center" id="section">

            <!-- Col gauche image film -->
            <div class="col-md-6">

                <!-- Ici, nous utilisons une boucle "v-for" pour afficher les genres du film dans des badges. Le code HTML ci-dessus affiche le texte "Genres :" suivi d'une série de badges pour chaque genre du film. 
                La boucle "v-for" parcourt la liste des genres du film, qui est disponible dans la variable "movieDetails.genres". Pour chaque genre, nous utilisons la directive ":key" pour attribuer une clé 
                unique à chaque élément de la liste, ce qui est recommandé par Vue.js pour optimiser les performances lors du rendu dynamique. Dans le contenu du badge, nous affichons le nom du genre en utilisant 
                l'expression "genre.name". Assurez-vous que la variable "movieDetails" est correctement définie et qu'elle contient la liste des genres du film dans le format approprié (par exemple, un tableau 
                d'objets avec des propriétés "id" et "name"). Si la variable "movieDetails.genres" est vide ou non définie, assurez-vous de gérer ce cas de manière appropriée, par exemple en affichant un message 
                indiquant que les genres ne sont pas disponibles pour ce film. -->
                <p class="text-light"> Genres : <span v-for="genre in movieDetails.genres" :key="genre.id" class="badge bg-dark border">{{ genre.name }}</span></p>
                <!-- card image film -->
                <div class="card w-50 mx-auto" id="card_details">
                    <!-- Ici, nous utilisons la directive "v-bind" pour afficher l'image du poster du film. Le code HTML ci-dessus affiche l'image du poster du film en utilisant la balise "img". La directive "v-bind:src" 
                    est utilisée pour lier dynamiquement l'attribut "src" de l'image à l'URL complète du poster du film. L'URL complète est construite en concaténant la variable "urlDeBase" avec la propriété "poster_path" 
                    de l'objet "movieDetails". La variable "urlDeBase" contient l'URL de base des images de TMDb, tandis que "movieDetails.poster_path" contient le chemin du poster du film dans la réponse de l'API.
                    Assurez-vous que la variable "urlDeBase" est correctement définie avec l'URL de base des images de TMDb, et que la variable "movieDetails" contient les détails du film, y compris la propriété "poster_path" 
                    avec le chemin du poster du film. Si la propriété "poster_path" de "movieDetails" est vide ou non définie, assurez-vous de gérer ce cas de manière appropriée, par exemple en affichant une image de 
                    remplacement ou un message indiquant que le poster n'est pas disponible. -->
                    <img class="card-img rounded" v-bind:src="urlDeBase + movieDetails.poster_path" alt="Poster du film">
                </div>

            </div>

            <!-- Col droite description film -->
            <div class="col-md-6 d-flex justify-content-center">

                <!-- Card description film -->
                <div class="card w-75 text-light text-start p-3" id="card_infos">
                    <!-- Titre film + Tagline -->
                    <h1 class="mb-4">{{ movieDetails.title }} <small class="fs-4">{{ movieDetails.tagline }}</small></h1>
                    <!-- Description film -->
                    <p class="fs-5">{{ movieDetails.overview }}</p>
                    <!-- Note du film -->
                    <p class="mt-4">note moyenne : {{ movieDetails.vote_average }}</p>
                </div>

            </div>

        </div>

        <!-- section vidéo bande annonce -->
        <div class="row pb-5">
            <div class="col">

                <!-- Ici, nous utilisons la directive "v-if" pour afficher une section de vidéo si une vidéo est disponible. Le code HTML ci-dessus contient une div avec la classe "video-wrapper" qui est centrée 
                horizontalement avec la classe "mx-auto". La div a également un identifiant "trailer" pour cibler cette section si nécessaire. La directive "v-if" est utilisée pour conditionner l'affichage de cette 
                div. L'expression "video[0]" est évaluée et la div ne sera rendue dans le DOM que si cette expression est évaluée comme vraie (true). Assurez-vous que la variable "video" est correctement définie 
                dans les données du composant. La variable "video" peut être un tableau ou un objet contenant des informations sur la vidéo. L'index [0] est utilisé pour vérifier si le tableau "video" contient au moins 
                un élément. Si la condition "video[0]" est évaluée comme fausse (false) (c'est-à-dire si aucun élément vidéo n'est disponible), la div avec la classe "video-wrapper" et l'identifiant "trailer" ne sera 
                pas affichée dans le DOM. Assurez-vous de définir correctement la logique qui met à jour la variable "video" pour afficher ou masquer cette section en fonction de la disponibilité de la vidéo. -->
                <div class="video-wrapper mx-auto" id="trailer" v-if="video[0]">
                    <!-- Ici, nous utilisons la balise "iframe" pour afficher une vidéo YouTube dans la section "video-wrapper" si une clé vidéo est disponible. La balise "iframe" est utilisée pour intégrer une vidéo YouTube 
                    à la page. La directive "v-bind:src" est utilisée pour lier dynamiquement l'attribut "src" de l'iframe à l'URL de la vidéo YouTube. L'URL de la vidéo YouTube est construite en concaténant la chaîne de base 
                    "https://www.youtube.com/embed/" avec la propriété "key" de l'objet "video[0]". La variable "video" doit être correctement définie dans les données du composant et contenir des informations sur la vidéo, y 
                    compris la propriété "key" qui représente la clé de la vidéo YouTube. Si la clé vidéo "video[0].key" est disponible, la vidéo YouTube sera affichée dans l'iframe. Sinon, l'iframe ne contiendra pas de vidéo 
                    et aucune vidéo ne sera affichée dans la section "video-wrapper". Assurez-vous que la variable "video" est correctement définie et que la propriété "key" de l'objet "video[0]" contient la clé de la vidéo 
                    YouTube. Gérez également les cas où la clé vidéo est absente ou non valide, en affichant un message d'erreur approprié ou en masquant l'iframe. La balise "iframe" a les attributs "width" et "allowfullscreen" 
                    pour spécifier la largeur de l'iframe et autoriser le mode plein écran de la vidéo. La classe "shadow-lg rounded" est utilisée pour ajouter des ombres et arrondir les coins de l'iframe, ce qui donne un aspect 
                    esthétique à la vidéo -->
                    <iframe width="100%" v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="shadow-lg rounded" id="video_movie_details"></iframe>
                </div>

            </div>
        </div>

    </div>
</template>










<script>
    // Dans cette partie, nous importons la dépendance "axios" nécessaire pour effectuer des requêtes HTTP.
    // Nous déclarons également les variables disponibles dans le composant "MovieDetails", notamment "movieDetails" qui contiendra les détails du film récupérés par l'API, "urlDeBase" qui contiendra l'URL de base des images de TMDb, et "video" qui contiendra les informations sur la vidéo associée au film.
    import axios from "axios"

    export default {

        // Le nom du composant est défini ici en tant que "MovieDetails".
        name: "MovieDetails",

        // Dans la section "data", nous déclarons les variables disponibles dans le composant.
        data() {    
            // La variable "movieDetails" sera utilisée pour stocker les détails du film récupérés à partir de l'API.
            // Elle est initialement définie comme un objet vide et sera remplie lorsque les données seront récupérées.
            // La variable "urlDeBase" contiendra l'URL de base des images de TMDb.
            // La variable "video" sera utilisée pour stocker les informations sur la vidéo associée au film, le cas échéant.
            // Elle est également initialement définie comme un objet vide et sera remplie lorsque les données de la vidéo seront récupérées.                    
            return {                   
                movieDetails: [],
                urlDeBase: "https://image.tmdb.org/t/p/original/",
                video: [],
            }
        },

        created() {

            // La méthode "created()" est un "hook" du cycle de vie de Vue.js, qui est appelé avant la génération du template par Vue.

            // Dans cette méthode, nous effectuons deux appels à l'API pour récupérer les détails du film et les informations vidéo associées.

            // Appel à l'API pour récupérer les détails du film en utilisant l'identifiant passé dans l'URL (this.$route.params.id).
            axios.get(
                "https://api.themoviedb.org/3/movie/" +
                this.$route.params.id +
                "?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr"
            )

            // Lorsque l'appel API réussit, le bloc "then" est exécuté avec la réponse (response) de l'API.
            .then(response => {
                // Nous stockons les détails du film récupérés dans la variable "movieDetails" de la section "data".
                this.movieDetails = response.data
                console.log(this.movieDetails)
            })

            // Appel à l'API pour récupérer les informations vidéo associées au film.
            axios.get(
                "https://api.themoviedb.org/3/movie/" +
                this.$route.params.id +
                "/videos?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr"
            )

            // Lorsque l'appel API réussit, le bloc "then" est exécuté avec la réponse (response) de l'API.
            .then((response) => {
                // Nous stockons les informations vidéo récupérées dans la variable "video" de la section "data". La propriété "results" de la réponse contient la liste des vidéos associées au film.
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

    titre_movie_details {
        min-height: 95vh;
    }

    #section {
        min-height: 100vh;
    }

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

    card_infos {
        background-color: rgba(0, 0, 0, 0.419);
        backdrop-filter: blur(7px);
        box-shadow: 1px 5px 10px black;
    }

    #card_infos p {
        font-weight: 300; 
        text-shadow: 2px 2px 15px black
    }

    #card_details img {
        box-shadow: 1px 5px 10px black;
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