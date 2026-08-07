fetch("images.json")
    .then(response => response.json())

    .then(images => {

        const grandeImage =
            document.getElementById("grandeImage");

        const miniatures =
            document.getElementById("miniatures");


        // Afficher la première photo

        if (images.length > 0) {

            grandeImage.src =
                "images/" + images[0];

        }


        // Créer les miniatures

        images.forEach((image, index) => {

            const miniature =
                document.createElement("img");


            miniature.src =
                "images/" + image;


            miniature.alt =
                "Photo " + (index + 1);


            miniature.classList.add(
                "miniature"
            );


            // Première miniature sélectionnée

            if (index === 0) {

                miniature.classList.add(
                    "active"
                );

            }


            // Changement de grande photo

            miniature.addEventListener(
                "click",
                () => {

                    grandeImage.src =
                        "images/" + image;


                    // Retirer la sélection

                    document
                        .querySelectorAll(".miniature")
                        .forEach(img => {

                            img.classList.remove(
                                "active"
                            );

                        });


                    // Sélectionner la miniature

                    miniature.classList.add(
                        "active"
                    );

                }
            );


            miniatures.appendChild(
                miniature
            );

        });

    })

    .catch(error => {

        console.error(
            "Erreur de chargement :",
            error
        );

    });
