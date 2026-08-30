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

    // ===== 2. GESTION DE LA BARRE DE RECHERCHE =====
    const recherche = document.getElementById('barreRecherche');
    const pierres = document.querySelectorAll('.pierre');

    if (recherche && pierres.length > 0) {
        recherche.addEventListener('input', () => {
            const texte = recherche.value.toLowerCase().trim();

            pierres.forEach((pierre) => {
                const nom = pierre.dataset.nom ? pierre.dataset.nom.toLowerCase() : '';

                if (nom.includes(texte)) {
                    pierre.style.display = ''; // Rétablit l'affichage d'origine du CSS (grid/flex)
                } else {
                    pierre.style.display = 'none'; // Masque la carte
                }
            });
        });
    }

});
