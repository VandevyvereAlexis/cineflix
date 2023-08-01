<template>
    <header>


        <nav class="navbar navbar-expand-lg bg-dark fixed-top rounded border-bottom" data-bs-theme="dark">
            <div class="container-fluid col-11">

                <a class="navbar-brand" href="#">
                    <router-link to="/" class="link text-white text-decoration-none" id="titreNav"><span
                            class="border rounded border-secondary p-1 px-5">CineFlix</span></router-link>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <router-link to="/FrenchMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">
                                Films Français
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/AmericanMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">
                                Films Americain
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/LastMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">
                                Cette année
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/Top50Movies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">
                                Top 50
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/SearchMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">
                                Recherche
                            </router-link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>


    </header>
</template>


<style>
</style>