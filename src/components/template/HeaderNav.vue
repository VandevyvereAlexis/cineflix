<template>
    <header class="bg-light">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div class="container-fluid">

                    <a class="navbar-brand" href="#">
                        <router-link to="/" class="link mx-5 text-white" id="titreNav">Vue JS Movies</router-link>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <router-link to="/FrenchMovies" class="link mx-5 text-white" id="titreNav">Films Français</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/AmericanMovies" class="link mx-5 text-white" id="titreNav">Films Americain</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/LastMovies" class="link mx-5 text-white" id="titreNav">Films de 2023</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/Top50Movies" class="link mx-5 text-white" id="titreNav">Top 50</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/SearchMovies" class="link mx-5 text-white" id="titreNav">Recherche</router-link>
                            </li>

                        </ul>
                    </div>
                    
                </div>
            </nav>
    </header>
</template>