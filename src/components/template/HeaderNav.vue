<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <router-link to="/" class="link mx-5 text-white text-decoration-none" id="titreNav"><span class="border rounded border-secondary p-1 px-5">CineFlix</span></router-link>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <router-link to="/FrenchMovies" class="link mx-3 text-white text-decoration-none" id="titreNav">Films Français</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/AmericanMovies" class="link mx-3 text-white text-decoration-none" id="titreNav">Films Americain</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/LastMovies" class="link mx-3 text-white text-decoration-none" id="titreNav">Films de 2023</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/Top50Movies" class="link mx-3 text-white text-decoration-none" id="titreNav">Top 50</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/SearchMovies" class="link mx-3 text-white text-decoration-none" id="titreNav">Recherche</router-link>
                        </li>

                    </ul>
                </div>
                    
            </div>
        </nav>
    </header>
</template>


<style>
    a {
        text-decoration: none;
    }
</style>