document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. FONCTION DE NORMALISATION (SANS ACCENTS) =====
    const sansAccents = (texte) => {
        return texte
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };

    // ===== 2. CHARGEMENT DE L'EN-TÊTE (HEADER) =====
    const headerElement = document.getElementById('main-header');

    if (headerElement) {
        fetch('header.html')
            .then(response => {
                if (!response.ok) throw new Error("Erreur de chargement du header");
                return response.text();
            })
            .then(data => {
                headerElement.innerHTML = data;
                initMenuBurger(); // Initialise le burger UNE FOIS le header chargé
            })
            .catch(error => console.error(error));
    } else {
        initMenuBurger();
    }

    // ===== 3. INITIALISATION DU MENU BURGER =====
    function initMenuBurger() {
        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('open');
                menu.classList.toggle('active');
            });
        }
    }

    // ===== 4. GESTION DE LA BARRE DE RECHERCHE =====
    const recherche = document.getElementById('barreRecherche');
    const pierres = document.querySelectorAll('.pierre');

    if (recherche && pierres.length > 0) {
        recherche.addEventListener('input', () => {
            const texteSaisi = sansAccents(recherche.value.trim());

            pierres.forEach((pierre) => {
                const nomOriginal = pierre.dataset.nom || '';
                const nomClean = sansAccents(nomOriginal);

                if (nomClean.includes(texteSaisi)) {
                    pierre.style.display = '';
                } else {
                    pierre.style.display = 'none';
                }
            });
        });
    }

});
