<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher   ///   v-bind:key="movie.id" : identifiant de chaque film   ///   v-bind permet d'injecter une variable en tant que valeur d'un attribut -->

    <!-- Ce lien dynamique utilise Vue.js et la directive v-bind pour créer un lien vers les détails du film en utilisant l'ID spécifique du film. La propriété `movie.id` est interpolée dans l'URL pour générer des liens uniques pour chaque film. Lorsque le lien est cliqué, il dirigera l'utilisateur vers "/MovieDetails/ID_DU_FILM". Les classes CSS "link" et "movieDetail" peuvent être utilisées pour styliser le lien et les détails du film en fonction des besoins de l'application. -->
    <router-link v-bind:to="`/MovieDetails/${movie.id}`" class="link">

        <!-- Card -->
        <div class="card rounded" id="movieCard">

            <!-- Image du film -->
            <img class="card-img rounded" v-bind:src="urlDeBase + movie.poster_path" alt="Poster du film">

            <!-- Element text sur image -->
            <div class="card-img-overlay">

                <!-- Cette balise h3 est conditionnellement rendue en fonction de l'URL de la route actuelle (via $route.path). Si l'URL correspond à "/Top50Movies", alors cette balise h3 sera affichée. -->
                <h3 v-if="$route.path == '/Top50Movies'">
                    <!-- À l'intérieur de la balise h3, un span est utilisé pour afficher le numéro de classement (#index + 1) des films dans le top 50. La classe "text-light" est utilisée pour définir la couleur du texte, "bg-dark" pour la couleur de fond sombre, "rounded-circle" pour donner une forme circulaire au span, "fs-6" pour définir la taille de police, "px-1" et "py-1" pour définir les marges intérieures horizontales et verticales, "border" pour ajouter une bordure autour du span, et "border-light" pour définir la couleur de la bordure. La classe "position-absolute" est utilisée pour positionner le span de manière absolue à l'intérieur de la balise h3. La directive "v-once" est utilisée pour indiquer que le contenu du span ne doit être évalué qu'une seule fois et ne pas être mis à jour lors des changements de données. -->
                    <span class="text-light bg-dark rounded-circle fs-6 px-1 py-1 border border-light position-absolute" v-once>#{{ index + 1 }}</span>
                </h3>


            </div>

            <!-- Element :hover de la card -->
            <div class="card-body rounded d-flex flex-column pt-0" id="cardBack">
                <!-- Element text de la face caché de la card -->
                <h3 class="text-light fs-5 border-top">En découvrir plus</h3>
            </div>


        </div>


    </router-link>
</template>










<script>
    export default {
        name: "MovieCard",

        // Ce composant "MovieCard" est destiné à afficher une carte de film avec les données passées en tant que propriétés (props).
        // Les props "movie" et "index" sont utilisées pour afficher les détails du film et son numéro de classement, respectivement.

        props : [
            "movie",    // Propriété pour stocker les détails du film passé depuis le composant parent.
            "index",    // Propriété pour stocker le numéro de classement du film dans la liste, passé depuis le composant parent.
        ],

        data() {
            
            // Dans la section "data" du composant, nous déclarons les données locales utilisées dans ce composant.
            // Dans ce cas, nous déclarons "urlDeBase" qui est la base de l'URL pour accéder aux images de TMDb (The Movie Database).

            return{
                urlDeBase: "https://image.tmdb.org/t/p/original/"
            }
        },
    }
</script>










<style>
    #movieCard {
        transition: .3s;
        overflow: hidden;
        box-shadow: 2px 5px 18px black;
    }

    #movieCard:hover {
        transform: scale(1.02);
        transition: .3s;
        box-shadow: 2px 5px 18px rgb(255, 255, 255);
    }

    #movieCard:hover > #movieCard:not(:hover) > img {
        filter: brightness(.5)
    }

    #cardBack {
        width: 100%;
        height: 100%;
        bottom: -100%;
        position: absolute;
        background: #0000007b;
        backdrop-filter: blur(6px);
        transition: 1s;
    }

    #movieCard:hover #cardBack {
        bottom: -91%;
    }

    #movieCard h3 span {
        top: 5px; 
        right: 5px; 
        box-shadow: 1.5px 2px 2px black;
    }

    @media screen and ( max-width: 992px ) {
        #cardBack {
            visibility: hidden;
        }
        #movieCard:hover {
            transform: none;
            box-shadow: none;
        }
    }

    @media screen and ( max-width: 1195px ) {
        #movieCard h3 {
            font-size: 14px !important;
        }
    }
</style>












