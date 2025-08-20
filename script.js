const navLinks = {
    projet: document.getElementById("boutonProjetACC"),
    profil: document.getElementById("boutonProfilACC"),
    parcours: document.getElementById("boutonParcoursACC"),
    competence: document.getElementById("boutonCompetenceACC")
};

window.addEventListener("scroll", () => {
    const sections = {
        projets: 0,
        about: document.querySelector("#about").offsetTop,
        parcours: document.querySelector("#parcours-academique").offsetTop,
        competence: document.querySelector("#skills").offsetTop,
    };

    const currentScroll = window.scrollY + window.innerHeight / 2;

    Object.values(navLinks).forEach(link => {
        link.style.color = "grey";
    });

    if (currentScroll >= sections.competence) {
        navLinks.competence.style.color = "white";
    } else if (currentScroll >= sections.parcours) {
        navLinks.parcours.style.color = "white";
    } else if (currentScroll >= sections.about) {
        navLinks.profil.style.color = "white";
    } else {
        navLinks.projet.style.color = "white";
    }
});

    document.querySelectorAll('.projet').forEach(projet => {
        const span = projet.querySelector('span');

        projet.querySelector('img').addEventListener('mouseover', () => {
            span.style.color = "white";
        });

        projet.querySelector('img').addEventListener('mouseout', () => {
            span.style.transition = "color 0.5s";
            span.style.color = "black";
        });
    });



    document.getElementById("boutonProjetACC").addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);


        const sections = document.querySelectorAll('#about, #parcours-academique, #skills, #frameworks, #os, #IDE');
        sections.forEach(section => {
            section.classList.add('hidden');
            observer.observe(section);
        });
    });

    document.getElementById("boutonProfilACC").addEventListener("click", (event) => {
        event.preventDefault();
        const profilDivPosition = document.querySelector("#profilDiv");
        profilDivPosition.scrollIntoView({ behavior: "smooth" });
    });


    document.getElementById("boutonParcoursACC").addEventListener("click", (event) => {
        event.preventDefault();
        const parcourlDivPosition = document.querySelector("#parcoursDiv");
        parcourlDivPosition.scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("boutonCompetenceACC").addEventListener("click", (event) => {
        event.preventDefault();
        const skillsPosition = document.querySelector("#skillsSection");
        skillsPosition.scrollIntoView({ behavior: "smooth" });
    });

(function () {
    const marvin = document.getElementById("marvin");
    const transitions = ["Marvin", "Virman", "Mirvan", "marvin"];
    let now = 0;
    let timeout = null;
    const speed = 100;

    const transform = (step, end) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        now += step;
        if (now >= 0 && now < transitions.length) {
            marvin.style.opacity = "0";
            setTimeout(() => {
                marvin.textContent = transitions[now];
                marvin.style.opacity = "1";
            }, speed / 2);
        }

        if ((step > 0 && now < end) || (step < 0 && now > end)) {
            timeout = setTimeout(() => transform(step, end), speed);
        }
    };

    marvin.onmouseenter = () => transform(1, transitions.length - 1);

    marvin.onmouseleave = () => transform(-1, 0);
})();

document.addEventListener("DOMContentLoaded", function () {
    const projets = document.querySelectorAll(".projet");
    console.log("Projets trouvés :", projets.length);


    const modal = document.createElement("div");
    modal.id = "modal";
    modal.innerHTML = `
        <div id="modal-content">
            <span id="close-btn">&times;</span>
            <h2 id="modal-title"></h2>
            <img id="modal-image" style="height: 250px; width: 250px" src="" alt="Projet Image">
            <p id="modal-description"></p>
            <p><strong>Technologies utilisées :</strong> <span id="modal-tech"></span></p>
            <a style="" id="modal-link" href="" target="_blank"></a>
        </div>
    `;
    document.body.appendChild(modal);

    projets.forEach(projet => {
        projet.addEventListener("click", function (e) {
            console.log("Un projet a été cliqué !");

            e.preventDefault();
            const projectId = this.querySelector("span").id;
            console.log("ID du projet :", projectId);


            const projectData = {
                bataille: {
                    title: "Bataille Navale",
                    img: "images/projet/plateau%20bataille%20navale.png",
                    description: "Un jeu de Bataille Navale (J vs J et J vs IA) avec comme seule\n" +
                        "interface le terminal.",
                    tech: "Java, JUnit, Git",
                    link: "https://github.com/mq2vin/Bataille_Navale"
                },
                jo: {
                    title: "Paris 2024 : L'Inspiration Olympique pour Los Angeles 2028",
                    img: "images/projet/logo%20jo.jpg",
                    description: "Site expliquant l'influence des JO de Paris sur ceux de Los Angeles 2028.",
                    tech: "HTML, CSS, Git, CloudFlares Pages, Trello",
                    link: "https://olympic-game-2024-to-2028.pages.dev/"
                },
                Screen: {
                    title: "ScreenShot Extension",
                    img: "images/projet/camera_white_bg.png",
                    description: "Extension simple pour capturer et enregistrer des pages Web au format PNG.",
                    tech: "HTML, CSS, JavaScript, HTML2canvas",
                    link: "https://github.com/mq2vin/ScreenShot-Extension"
                },
                VMbox: {
                    title: "Installation d’un poste pour le développement",
                    img: "images/projet/virtualbox_white_bg.png",
                    description: "Installation d’un poste de travail sous Linux sur une machine virtuelle avec\n" +
                        "configuration de plusieurs utilisateurs et installation de toutes les\n" +
                        "applications nécessaires",
                    tech: "Oracle VirtualBox, Linux Ubuntu Mate",
                },
                portfolio: {
                    title: "Mon Portfolio",
                    img: "images/projet/icon3.webp",
                    description: "",
                    tech: "HTML, CSS, JavaScript, Git, CloudFlare Pages",
                    link: "https://github.com/mq2vin/portfolio-marvin"
                },
                LoT: {
                    title: "Lost On Crampteus",
                    img: "images/projet/LoT.png",
                    description: "Lost-on-Crampteus est un projet de groupe développé en Java avec JavaFX.\n " +
                        "Ce jeu, inspiré de Terraria, met en pratique le modèle MVC (Modèle-Vue-Contrôleur) et les méthodologies agiles. Le projet s'est déroulé sur une durée de 6 semaines, divisées en 3 sprints.",
                    tech: "Java, JavaFx, Git, JUnit, Trello",
                    link: "https://github.com/mq2vin/LoT"
                }
            };


            const data = projectData[projectId];
            if (data) {
                document.getElementById("modal-title").textContent = data.title;
                document.getElementById("modal-image").src = data.img;
                document.getElementById("modal-description").textContent = data.description;
                document.getElementById("modal-tech").textContent = data.tech;

                const modalLink = document.getElementById("modal-link");

                if (data.link) { // Si un lien existe
                    modalLink.style.display = "inline-block";

                    switch(projectId) {
                        case "bataille":
                        case "Screen":
                        case "portfolio":
                        case "LoT":
                            modalLink.innerHTML = `> GitHub 🔗<`;
                            break;
                        case "jo":
                            modalLink.innerHTML = `>🔗 Lien vers le site <`;
                            break;

                        default:
                            modalLink.innerHTML = `> Voir le projet <`;
                    }

                    modalLink.href = data.link;
                } else {
                    modalLink.style.display = "none";
                }

                console.log("Affichage de la modale !");
                modal.style.display = "flex";


                setTimeout(() => {
                    modal.classList.add("active");
                }, 10);
            }
        });
    });


    document.getElementById("close-btn").addEventListener("click", function () {
        const closeBtn = document.getElementById("close-btn");
        console.log("Bouton de fermeture détecté :", closeBtn);
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("active");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
});