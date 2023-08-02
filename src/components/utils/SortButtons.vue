<template>
    <!-- Container button -->
    <div class="container p-4">
        <div class="row col-md-11 col-sm-11 mx-auto">
            <div class="mx-auto" id="sortButtons">
                <div class="text-center d-flex gap-1 justify-content-center">

                    <!-- Le premier bouton est destiné à trier les films par titre. Lorsque le bouton est cliqué, il déclenche l'événement "click" qui est lié à la méthode "sortByTitle" définie dans le composant. -->
                    <button class="btn border text-light text-start" @click="sortByTitle">Trier par titre</button>

                    <!-- Le deuxième bouton est destiné à trier les films par date de sortie. Lorsque le bouton est cliqué, il déclenche l'événement "click" qui est lié à la méthode "sortByDate" définie dans le composant. -->
                    <button class="btn border text-light" @click="sortByDate">Trier par date de sortie</button>

                    <!-- Le troisième bouton est destiné à trier les films par note. Lorsque le bouton est cliqué, il déclenche l'événement "click" qui est lié à la méthode "sortByRating" définie dans le composant. -->
                    <button class="btn border text-light" @click="sortByRating">Trier par note</button>

                </div>
            </div>
        </div>
    </div>
</template>










<script>
    export default {

        name: "SortButtons",

        // Le composant "SortButtons" accepte la liste de films en tant que propriété (props).
        props: ['movies'],

        data() {
            return {
                // Dans la section "data", nous déclarons des indicateurs pour savoir si les tris ont été effectués.                       
                sortedByTitle: false,   // Indicateur pour vérifier si les films ont été triés par titre.
                sortedByDate: false,    // Indicateur pour vérifier si les films ont été triés par date de sortie.
                sortedByRating: false,  // Indicateur pour vérifier si les films ont été triés par note.
            }
        },

        methods: {

            // Fonction de tri par titre
            sortByTitle() {

                // Pour effectuer le tri, nous devons créer une copie de la liste de films,
                // car nous ne pouvons pas modifier directement une propriété "props".
                let moviesToSort = this.movies  // Création d'une copie de la liste de films

                // Vérifier si le tri a déjà été effectué ou non
                // Si le tri n'a pas été effectué
                if (!this.sortedByTitle) {  // Si this.sortedByTitle est égal à false

                    // Tri des films par titre dans l'ordre alphabétique (tri normal)
                    moviesToSort.sort(function (a, b) {
                        if (a.title.normalize("NFD") < b.title.normalize("NFD")) return -1;
                        return a.title.normalize("NFD") > b.title.normalize("NFD") ? 1 : 0;
                    })
                    // Mise à jour de l'indicateur "sortedByTitle" pour refléter que le tri par titre a été effectué.
                    this.sortedByTitle = true

                } else {    // Si le tri a déjà été effectué

                    // Tri des films par titre dans l'ordre alphabétique inverse (tri inverse)
                    moviesToSort.sort(function (a, b) {
                        if (a.title.normalize("NFD") > b.title.normalize("NFD")) return -1;
                        return a.title.normalize("NFD") < b.title.normalize("NFD") ? 1 : 0;
                    })

                    // Mise à jour de l'indicateur "sortedByTitle" pour refléter que le tri par titre a été annulé (tri inverse effectué).
                    this.sortedByTitle = false
                }

                // Ici, vous pouvez faire ce que vous voulez avec la liste triée des films (moviesToSort).
                // Par exemple, vous pouvez l'afficher dans un autre composant ou la stocker dans une propriété du composant.
                console.log(moviesToSort)
            },


            // Fonction de tri par date de sortie
            sortByDate() {                              
            
                // Pour effectuer le tri, nous devons créer une copie de la liste de films,
                // car nous ne pouvons pas modifier directement une propriété "props".
                let moviesToSort = this.movies  // Création d'une copie de la liste de films

                // Vérifier si le tri a déjà été effectué ou non
                // Si le tri n'a pas été effectué
                if (!this.sortedByDate) {   // Si this.sortedByDate est égal à false

                    // Tri des films par date de sortie dans l'ordre chronologique (tri normal)
                    moviesToSort.sort(function (a, b) {
                        if (a.release_date < b.release_date) return -1;
                        return a.release_date > b.release_date ? 1 : 0;
                    })

                    // Mise à jour de l'indicateur "sortedByDate" pour refléter que le tri par date de sortie a été effectué.
                    this.sortedByDate = true

                } else {    // Si le tri a déjà été effectué

                    // Tri des films par date de sortie dans l'ordre chronologique inverse (tri inverse)
                    moviesToSort.sort(function (a, b) {
                        if (a.release_date > b.release_date) return -1;
                        return a.release_date < b.release_date ? 1 : 0;
                    })

                    // Mise à jour de l'indicateur "sortedByDate" pour refléter que le tri par date de sortie a été annulé (tri inverse effectué).
                    this.sortedByDate = false
                }

                // Ici, vous pouvez faire ce que vous voulez avec la liste triée des films (moviesToSort).
                // Par exemple, vous pouvez l'afficher dans un autre composant ou la stocker dans une propriété du composant.
                console.log(moviesToSort)
            },



            // Fonction de tri par note moyenne
            sortByRating() {                              
                // Pour effectuer le tri, nous devons créer une copie de la liste de films,
                // car nous ne pouvons pas modifier directement une propriété "props".
                let moviesToSort = this.movies  // Création d'une copie de la liste de films

                // Vérifier si le tri a déjà été effectué ou non
                // Si le tri n'a pas été effectué
                if (!this.sortedByRating) { // Si this.sortedByRating est égal à false

                    // Tri des films par note moyenne dans l'ordre croissant (tri normal)
                    moviesToSort.sort(function (a, b) {
                        if (a.vote_average < b.vote_average) return -1;
                        return a.vote_average > b.vote_average ? 1 : 0;
                    })

                    // Mise à jour de l'indicateur "sortedByRating" pour refléter que le tri par note moyenne a été effectué.
                    this.sortedByRating = true

                } else {    // Si le tri a déjà été effectué

                    // Tri des films par note moyenne dans l'ordre décroissant (tri inverse)
                    moviesToSort.sort(function (a, b) {
                        if (a.vote_average > b.vote_average) return -1;
                        return a.vote_average < b.vote_average ? 1 : 0;
                    })

                    // Mise à jour de l'indicateur "sortedByRating" pour refléter que le tri par note moyenne a été annulé (tri inverse effectué).
                    this.sortedByRating = false
                }

                // Ici, vous pouvez faire ce que vous voulez avec la liste triée des films (moviesToSort).
                // Par exemple, vous pouvez l'afficher dans un autre composant ou la stocker dans une propriété du composant.
                console.log(moviesToSort)
            },

        },

    }
</script>










<style>
    #sortButtons button {
        overflow: hidden;
        z-index: 0;
        position: relative;
        font-family: 'Bebas Neue', sans-serif;
        letter-spacing: 0.6px;
    }

    #sortButtons button::before {
        content: '';
        position: absolute;
        top: 35px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 50% 50% 0 0;
        transition: all .5s;
        z-index: -1;
    }

    #sortButtons button:hover::before {
        top: 0;
        border-radius: 0;
    }

    #sortButtons button:hover {
        color: black !important;
        transform: scale(1.02);
        box-shadow: 2px 3px 5px black;
    }

    @media screen and ( max-width: 992px ) {
        #sortButtons button:hover {
            transform: none;
            color: azure !important;
            box-shadow: none;
        }

        #sortButtons button::before {
            background-color: transparent;
        }
    }

    @media screen and ( max-width: 395px ) {
        #sortButtons button {
            font-size: 12px;
            letter-spacing: 0.5px;
        }
    }
</style>