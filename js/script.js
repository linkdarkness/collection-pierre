document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. GESTION DU MENU BURGER =====
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open'); // Anime le burger en X
            menu.classList.toggle('active');     // Affiche/masque le menu
        });
    }

    // ===== 2. GESTION DE LA BARRE DE RECHERCHE (SANS ACCENTS) =====
    const recherche = document.getElementById('barreRecherche');
    const pierres = document.querySelectorAll('.pierre');

    if (recherche && pierres.length > 0) {
        // Fonction pour retirer les accents d'un texte
        const sansAccents = (texte) => {
            return texte
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
        };

        recherche.addEventListener('input', () => {
            // Nettoyage de la saisie utilisateur (sans accent + minuscules)
            const texteSaisi = sansAccents(recherche.value.trim());

            pierres.forEach((pierre) => {
                const nomOriginal = pierre.dataset.nom || '';
                // Nettoyage du nom de la pierre (sans accent + minuscules)
                const nomClean = sansAccents(nomOriginal);

                if (nomClean.includes(texteSaisi)) {
                    pierre.style.display = ''; // Affiche la pierre
                } else {
                    pierre.style.display = 'none'; // Masque la pierre
                }
            });
        });
    }

});
