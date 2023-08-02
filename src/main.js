// Importation du module "createApp" de Vue pour créer l'application Vue.js
import { createApp } from 'vue'

// Importation du composant "App" depuis le fichier "App.vue"
import App from './App.vue'

// Importation du routeur défini dans le fichier "router.js"
import router from "./router.js"

// Création de l'application Vue.js en utilisant le composant "App"
createApp(App)

// Injection du routeur dans l'application Vue.js
.use(router)

// Montage de l'application Vue.js sur l'élément avec l'ID "app" dans le HTML
.mount('#app')

