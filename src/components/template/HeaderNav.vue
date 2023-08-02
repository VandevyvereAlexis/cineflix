<template>
    <!-- Header -->
    <header>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-dark fixed-top rounded border-bottom" data-bs-theme="dark">
            <div class="container-fluid col-11">

                <!-- Nom du site -->
                <a class="navbar-brand" href="#"><router-link to="/" class="link text-white text-decoration-none" id="titreNav"><span class="border rounded border-secondary p-1 px-5">CineFlix</span></router-link></a>

                <!-- Menu burger -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                <!-- Liens -->
                <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <!-- Lien Films Français -->
                        <li class="nav-item"><router-link to="/FrenchMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">Films Français</router-link></li>

                        <!-- Lien Films Americain -->
                        <li class="nav-item"><router-link to="/AmericanMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">Films Americain</router-link></li>

                        <!-- Lien Cette année -->
                        <li class="nav-item"><router-link to="/LastMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">Cette année</router-link></li>

                        <!-- Lien Top 50 -->
                        <li class="nav-item"><router-link to="/Top50Movies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">Top 50</router-link></li>

                        <!-- Lien Recherche -->
                        <li class="nav-item"><router-link to="/SearchMovies" class="link mx-3 text-white text-decoration-none fs-5" id="titreNav">Recherche</router-link></li>

                    </ul>
                </div>

            </div>
        </nav>


    </header>
</template>