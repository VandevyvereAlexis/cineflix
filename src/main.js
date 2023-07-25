import { createApp } from 'vue'
import App from './App.vue'

// importation du routeur
import router from "./router.js"

createApp(App)
.use(router)       // je l'injecte dans l'application 
.mount('#app')

