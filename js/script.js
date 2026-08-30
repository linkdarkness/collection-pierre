const recherche = document.getElementById("barreRecherche");
const pierres = document.querySelectorAll(".pierre");


recherche.addEventListener("keyup", function(){

    let texte = recherche.value.toLowerCase();


    pierres.forEach(function(pierre){

        let nom = pierre.dataset.nom;


        if(nom.includes(texte)){
            pierre.style.display="block";
        }
        else {
            pierre.style.display="none";
        }

    });

});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});
