import { createWebHistory, createRouter } from "vue-router";

// on importe les différents composants (concernés par des routes)
import App from "./App.vue";
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import Top50Movies from "./components/Top50Movies.vue";
import SearchMovies from "./components/SearchMovies.vue";

const routes = [            // on déclare routes
    {
        path: '/',          // path = url
        component: App,     // composant associé
    },
    {
        path: '/AmericanMovies', 
        component: AmericanMovies,
    },
    {
        path: '/FrenchMovies', 
        component: FrenchMovies,
    },
    {
        path: '/LastMovies', 
        component: LastMovies,
    },
    {
        path: '/Top50Movies', 
        component: Top50Movies,
    },
    {
        path: '/SearchMovies', 
        component: SearchMovies,
    },
]

const router = createRouter({       // initialisation du routeur
    history: createWebHistory(),    // activation mode histoire 
    routes : routes                 // on llui passe la liste des routes
});

export default router;
