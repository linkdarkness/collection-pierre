javascript
fetch("images.json")

    .then(response => response.json())

    .then(images => {

        const grandeImage =
            document.getElementById("grandeImage");

        const miniatures =
            document.getElementById("miniatures");


        // Première image

        if (images.length > 0) {

            grandeImage.src =
                "images/" + images[0];

            grandeImage.alt =
                images[0];

        }


        // Création des miniatures

        images.forEach((image, index) => {

            const miniature =
                document.createElement("img");


            miniature.src =
                "images/" + image;


            miniature.alt =
                image;


            miniature.classList.add("miniature");


            // Première miniature sélectionnée

            if (index === 0) {

                miniature.classList.add("active");

            }


            // Clic sur une miniature

            miniature.addEventListener(
                "click",
                function() {

                    grandeImage.src =
                        "images/" + image;


                    // Retirer active

                    document
                        .querySelectorAll(".miniature")
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


            miniatures.appendChild(miniature);

        });

    })

    .catch(error => {

        console.error(
            "Erreur lors du chargement des images :",
            error
        );

    });