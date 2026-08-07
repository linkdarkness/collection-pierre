fetch("images.json")
.then(response => response.json())
.then(images => {

    const galerie = document.getElementById("galerie");

    images.forEach(image => {

        let bloc = document.createElement("div");

        bloc.className = "photo";


        bloc.innerHTML = `
            <img src="images/${image}">
            <div class="texte">
                Pierre de collection
            </div>
        `;


        galerie.appendChild(bloc);

    });

});