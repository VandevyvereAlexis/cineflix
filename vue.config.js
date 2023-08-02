// Importation de la fonction "defineConfig" depuis "@vue/cli-service"
const { defineConfig } = require('@vue/cli-service')

// Exportation de la configuration du projet Vue.js en utilisant "defineConfig"
module.exports = defineConfig({
  // transpileDependencies: true indique que les dépendances tierces doivent être transpilées
  // Cela permet de s'assurer que les dépendances sont compatibles avec la version de Babel utilisée dans le projet
  // Cela est souvent nécessaire lorsque certaines dépendances tierces utilisent des fonctionnalités JavaScript modernes non prises en charge par le navigateur cible.
  transpileDependencies: true
})
