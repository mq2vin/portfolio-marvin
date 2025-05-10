const projet1 = document.getElementById("projet1");
const projet2 = document.getElementById("projet2");
const projet3 = document.getElementById("projet3");
const projet4 = document.getElementById("projet4");
const projet5 = document.getElementById("projet5");
const projet6 = document.getElementById("projet6");


const lienProjetAccueil = document.getElementById("boutonProjetACC");
const lienProfilAccueil = document.getElementById("boutonProfilACC");
const lienParcoursAccueil = document.getElementById("boutonParcoursACC");
const lienCompetencesAccueil = document.getElementById("boutonCompetenceACC");


    window.addEventListener("scroll", () => {
        const sections = {
            projets: 0, // Position du haut de la page
            about: document.querySelector("#about").offsetTop, // Position de la section "Qui suis-je ?"
            parcours: document.querySelector("#parcours").offsetTop,
            competence: document.querySelector("#skills").offsetTop,
        };

        const currentScroll = window.scrollY + window.innerHeight / 2;

        // Réinitialiser les couleurs
        lienProjetAccueil.style.color = "grey";
        lienProfilAccueil.style.color = "grey";
        lienParcoursAccueil.style.color = "grey";
        lienCompetencesAccueil.style.color = "grey";

        // Changer la couleur en fonction de la section visible
        if (currentScroll >= sections.competence) {
            lienCompetencesAccueil.style.color = "white";
        } else if (currentScroll >= sections.parcours) {
            lienParcoursAccueil.style.color = "white";
        } else if (currentScroll >= sections.about) {
            lienProfilAccueil.style.color = "white";
        } else {
            lienProjetAccueil.style.color = "white";
        }

    });


    const projetsEtSpans = [
        { imageId: "projet1", spanId: "bataille" },
        { imageId: "projet2", spanId: "jo" },
        { imageId: "projet3", spanId: "suzanne" },
        { imageId: "projet4", spanId: "Screen" },
        { imageId: "projet5", spanId: "VMbox" },
        { imageId: "projet6", spanId: "portfolio" }
    ];

    projetsEtSpans.forEach(({ imageId, spanId }) => {
        const image = document.getElementById(imageId);
        const span = document.getElementById(spanId);

        image.addEventListener("mouseover", () => {
            span.style.color = "white";
        });

        image.addEventListener("mouseout", () => {
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


        const sections = document.querySelectorAll('#about, #parcours, #skills, #frameworks, #os, #IDE');
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
                suzanne: {
                    title: "Suzanne Lenglen",
                    img: "images/projet/suzanne.png",
                    description: "Un site sur la célèbre joueuse de tennis Suzanne Lenglen.",
                    tech: "HTML, CSS, Git, CloudFlares Pages",
                    link: "https://suzanne-lenglen.pages.dev/"
                },
                Screen: {
                    title: "ScreenShot Extension",
                    img: "images/projet/camera_white_bg.png",
                    description: "Extension simple pour capturer et enregistrer des pages Web au format PNG.",
                    tech: "HTML, CSS, JavaScript, Chrome Extension API",
                    link: "https://github.com/mq2vin/ScreenShot-Extension"
                },
                VMbox: {
                    title: "Installation d’un poste pour le développement",
                    img: "images/projet/virtualbox_white_bg.png",
                    description: "Installation d’un poste de travail sous Linux sur une machine virtuelle avec\n" +
                        "configuration de plusieurs utilisateurs et installation de toutes les\n" +
                        "applications nécessaires",
                    tech: "Oracle VirtualBox, Linux Ubuntu Mate",
                    link: ""
                },
                portfolio: {
                    title: "Mon Portfolio",
                    img: "images/icon/icon3.webp",
                    description: "",
                    tech: "HTML, CSS, JavaScript, Git, CloudFlare Pages",
                    link: ""
                }
            };


            const data = projectData[projectId];
            if (data) {
                document.getElementById("modal-title").textContent = data.title;
                document.getElementById("modal-image").src = data.img;
                document.getElementById("modal-description").textContent = data.description;
                document.getElementById("modal-tech").textContent = data.tech;
                if(projectId === "bataille" || projectId === "Screen"){
                    document.getElementById("modal-link").innerHTML = `> GitHub 🔗<`
                    document.getElementById("modal-link").href = data.link;
                }
                else if(projectId === "jo" || projectId === "suzanne"){
                    document.getElementById("modal-link").innerHTML = `>🔗 Lien vers le site <`
                    document.getElementById("modal-link").href = data.link;
                }
                else{
                    document.getElementById("modal-link").innerHTML = ``
                    document.getElementById("modal-link").href = null;
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