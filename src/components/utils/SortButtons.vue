



<template>
    <div class="container p-4">
        <div class="row col-md-11 col-sm-11 mx-auto">
            <div class="mx-auto" id="sortButtons">
                <div class="text-center d-flex gap-1 justify-content-center">
                    <button class="btn border text-light text-start" @click="sortByTitle">
                        Trier par titre
                    </button>

                    <button class="btn border text-light" @click="sortByDate">
                        Trier par date de sortie
                    </button>

                    <button class="btn border text-light" @click="sortByRating">
                        Trier par note
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>


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






<script>

    export default {

        name: "SortButtons",

        props: ['movies'], // les films à tirer 

        data() {
            return { // indicateurs pour savoir si les tris ont été effectués                          
                sortedByTitle: false,
                sortedByDate: false,
                sortedByRating: false,
            }
        },

        methods: { // je déclare mes 3 fonctions de tri



            // tri par titre
            sortByTitle() {

                // je crée une copie de ma liste de films (impossible de modifier directement une prop)
                let moviesToSort = this.movies

                // je verifie si le tri a déjà été effectué ou pas
                // si le tri n'a pas été effectué
                if (!this.sortedByTitle) {  // if (this.sortedByTitle == false) autre syntaxe

                    // je tri mes film par titre dans l'ordre alphabetique => tri normal
                    moviesToSort.sort(function (a, b) {
                        if (a.title.normalize("NFD") < b.title.normalize("NFD")) return -1;
                        return a.title.normalize("NFD") > b.title.normalize("NFD") ? 1 : 0;
                    })
                    this.sortedByTitle = true

                } else { // si le tri a deja été effectué

                    // je trie mes films par titre dans l'ordre alphabetique inversé => tri inverse
                    moviesToSort.sort(function (a, b) {
                        if (a.title.normalize("NFD") > b.title.normalize("NFD")) return -1;
                        return a.title.normalize("NFD") < b.title.normalize("NFD") ? 1 : 0;
                    })

                    // this.sortedByTitle = false
                }
                console.log(moviesToSort)
            },







        sortByDate() {                                // tri par date de sortie      
            
            // je crée une copie de ma liste de films (impossible de modifier directement une prop)
            let moviesToSort = this.movies

            // je verifie si le tri a déjà été effectué ou pas
            // si le tri n'a pas été effectué
            if (!this.sortedByDate) {  // if (this.sortedByTitle == false) autre syntaxe

                // je tri mes film par titre dans l'ordre alphabetique => tri normal
                moviesToSort.sort(function (a, b) {

                    if (a.release_date < b.release_date) return -1;
                    return a.release_date > b.release_date ? 1 : 0;

                })
                this.sortedByDate = true

            } else {    // si le tri a deja été effectué

                // je trie mes films par titre dans l'ordre alphabetique inversé => tri inverse
                moviesToSort.sort(function (a, b) {

                    if (a.release_date > b.release_date) return -1;
                    return a.release_date < b.release_date ? 1 : 0;
                })

                this.sortedByDate = false
            }

            console.log(moviesToSort)
        },

        sortByRating() {                              // tri par note moyenne
            // je crée une copie de ma liste de films (impossible de modifier directement une prop)
            let moviesToSort = this.movies

            // je verifie si le tri a déjà été effectué ou pas
            // si le tri n'a pas été effectué
            if (!this.sortedByRating) {  // if (this.sortedByTitle == false) autre syntaxe

                // je tri mes film par titre dans l'ordre alphabetique => tri normal
                moviesToSort.sort(function (a, b) {

                    if (a.vote_average < b.vote_average) return -1;
                    return a.vote_average > b.vote_average ? 1 : 0;

                })
                this.sortedByRating = true

            } else {    // si le tri a deja été effectué

                // je trie mes films par titre dans l'ordre alphabetique inversé => tri inverse
                moviesToSort.sort(function (a, b) {

                    if (a.vote_average > b.vote_average) return -1;
                    return a.vote_average < b.vote_average ? 1 : 0;
                })

                this.sortedByRating = false
            }

            console.log(moviesToSort)
        },
    },

}

</script>