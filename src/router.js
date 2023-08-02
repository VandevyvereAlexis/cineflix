// Importation des fonctions "createWebHistory" et "createRouter" depuis "vue-router"
import { createWebHistory, createRouter } from "vue-router";

// Importation des différents composants associés aux routes
import App from "./App.vue";
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import Top50Movies from "./components/Top50Movies.vue";
import SearchMovies from "./components/SearchMovies.vue";
import MovieDetails from "./components/MovieDetails.vue";

// Déclaration des différentes routes de l'application
const routes = [            
    {
        path: '/',                      // Chemin de l'URL pour la page d'accueil     
        component: App,                 // Composant associé à la page d'accueil
    },
    {
        path: '/AmericanMovies',        // Chemin de l'URL pour la page des films américains
        component: AmericanMovies,      // Composant associé à la page des films américains
    },
    {
        path: '/FrenchMovies',          // Chemin de l'URL pour la page des films français
        component: FrenchMovies,        // Composant associé à la page des films français
    },
    {
        path: '/LastMovies',            // Chemin de l'URL pour la page des derniers films
        component: LastMovies,          // Composant associé à la page des derniers films
    },  
    {
        path: '/Top50Movies',           // Chemin de l'URL pour la page des 50 meilleurs films
        component: Top50Movies,         // Composant associé à la page des 50 meilleurs films
    },
    {
        path: '/SearchMovies',          // Chemin de l'URL pour la page de recherche de films
        component: SearchMovies,        // Composant associé à la page de recherche de films
    },
    {   
        path: '/MovieDetails/:id',      // Chemin de l'URL pour la page des détails d'un film (avec paramètre "id" dynamique)
        component: MovieDetails,        // Composant associé à la page des détails d'un film
    },
]

// Initialisation du routeur en utilisant les options de "createWebHistory" et la liste des routes définies ci-dessus
const router = createRouter({       
    history: createWebHistory(),    // Activation du mode d'histoire pour les URLs
    routes : routes                 // Liste des routes définies ci-dessus
});

// Exportation du routeur pour qu'il puisse être utilisé dans d'autres fichiers
export default router;
