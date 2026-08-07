fetch("pierres.json")
    .then(response => {

        if (!response.ok) {
            throw new Error("Impossible de charger pierres.json");
        }

        return response.json();

    })

    .then(data => {

        const galerie =
            document.getElementById("galerie");


        data.pierres.forEach(pierre => {


            // =========================
            // CONTENEUR DE LA PIERRE
            // =========================

            const bloc =
                document.createElement("section");

            bloc.className = "pierre";


            // =========================
            // INFORMATIONS
            // =========================

            const informations =
                document.createElement("div");

            informations.className =
                "informations";


            informations.innerHTML = `
                <h2>${pierre.nom}</h2>

                <p>
                    <strong>Origine :</strong>
                    ${pierre.origine}
                </p>

                <p>
                    ${pierre.description}
                </p>
            `;


            // =========================
            // GRANDE IMAGE
            // =========================

            const grandeImage =
                document.createElement("img");

            grandeImage.className =
                "grande-image";


            grandeImage.src =
                "images/" + pierre.photos[0];


            grandeImage.alt =
                pierre.nom;


            // =========================
            // CONTENEUR GRANDE IMAGE
            // =========================

            const grandeImageContainer =
                document.createElement("div");

            grandeImageContainer.className =
                "image-principale";


            grandeImageContainer.appendChild(
                grandeImage
            );


            // =========================
            // MINIATURES
            // =========================

            const miniatures =
                document.createElement("div");

            miniatures.className =
                "miniatures";


            pierre.photos.forEach(
                (photo, index) => {

                    const miniature =
                        document.createElement("img");


                    miniature.src =
                        "images/" + photo;


                    miniature.alt =
                        pierre.nom;


                    miniature.className =
                        "miniature";


                    // Première miniature active

                    if (index === 0) {

                        miniature.classList.add(
                            "active"
                        );

                    }


                    // =========================
                    // CLIC
                    // =========================

                    miniature.addEventListener(
                        "click",
                        () => {


                            grandeImage.src =
                                "images/" + photo;


                            // Retirer active

                            miniatures
                                .querySelectorAll(
                                    ".miniature"
                                )
                                .forEach(img => {

                                    img.classList.remove(
                                        "active"
                                    );

                                });


                            // Ajouter active

                            miniature.classList.add(
                                "active"
                            );

                        }
                    );


                    miniatures.appendChild(
                        miniature
                    );

                }
            );


            // =========================
            // ASSEMBLAGE
            // =========================

            bloc.appendChild(
                informations
            );

            bloc.appendChild(
                grandeImageContainer
            );

            bloc.appendChild(
                miniatures
            );


            galerie.appendChild(
                bloc
            );

        });

    })

    .catch(error => {

        console.error(error);

    });