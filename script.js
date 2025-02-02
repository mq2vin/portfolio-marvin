const projet1 = document.getElementById("projet1");
const projet2 = document.getElementById("projet2");
const projet3 = document.getElementById("projet3");

const spanBataille = document.getElementById("bataille");
const spanJo = document.getElementById("jo")
const spanSuzanne = document.getElementById("suzanne");

const lienProjetAccueil = document.getElementById("boutonProjetACC");
const lienProfilAccueil = document.getElementById("boutonProfilACC");
const lienCompetencesAccueil = document.getElementById("boutonCompetenceACC");


const about = document.querySelector("#about");

    window.addEventListener("scroll", () => {
        const sections = {
            projets: 0, // Position du haut de la page
            about: document.querySelector("#about").offsetTop, // Position de la section "Qui suis-je ?"
            competence: document.querySelector("#skills").offsetTop,
        };

        const currentScroll = window.scrollY + window.innerHeight / 2;

        // Réinitialiser les couleurs
        lienProjetAccueil.style.color = "grey";
        lienProfilAccueil.style.color = "grey";
        lienCompetencesAccueil.style.color = "grey";

        // Déterminer quelle section est visible
        if (currentScroll >= sections.competence) {
            // Section "Compétences"
            lienCompetencesAccueil.style.color = "white";
        } else if (currentScroll >= sections.about) {
            // Section "Profil"
            lienProfilAccueil.style.color = "white";
            aboutStyleAdd();
        } else {
            // Section "Projets"
            lienProjetAccueil.style.color = "white";
            aboutStyleRemove();
        }
    });

    function aboutStyleAdd(){
        about.style.color = "white";
    }
    function aboutStyleRemove(){
        about.style.color = "black";
    }

    projet1.addEventListener("mouseover", () => {
        spanBataille.style.color = "white";
    });

    projet1.addEventListener("mouseout", () => {
        spanBataille.style.transition = "color 0.5s";
        spanBataille.style.color = "black";
    });


    projet2.addEventListener("mouseover", () => {
        spanJo.style.color = "white";
    });

    projet2.addEventListener("mouseout", () => {
        spanJo.style.transition = "color 0.5s";
        spanJo.style.color = "black";
    });


    projet3.addEventListener("mouseover", () => {
        spanSuzanne.style.color = "white";
    });

    projet3.addEventListener("mouseout", () => {
        spanSuzanne.style.transition = "color 0.5s";
        spanSuzanne.style.color = "black";
    });

    document.getElementById("boutonProjetACC").addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            threshold: 0.1 // L'élément est considéré visible si 10% est dans le viewport
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Arrête d'observer après avoir ajouté la classe
                }
            });
        }, observerOptions);

        // Sélectionnez les sections à observer
        const sections = document.querySelectorAll('#about, #skills, #os, #IDE');
        sections.forEach(section => {
            section.classList.add('hidden'); // Ajoutez la classe cachée initiale
            observer.observe(section);
        });
    });

    document.getElementById("boutonProfilACC").addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const middlePosition = document.querySelector("#middle"); // Cible la section Profil
        middlePosition.scrollIntoView({ behavior: "smooth" }); // Active le scroll fluide
    });


    document.getElementById("boutonCompetenceACC").addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const middlePosition = document.querySelector("#middle"); // Cible la section Profil
        middlePosition.scrollIntoView({ behavior: "smooth" }); // Active le scroll fluide
    });
    document.getElementById("boutonCompetenceACC").addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const skillsPosition = document.querySelector("#skillsSection"); // Positionner au milieu
        skillsPosition.scrollIntoView({ behavior: "smooth" }); // Active le scroll fluide
    });

(function () {
    const marvin = document.getElementById("marvin");
    const transitions = ["Marvin", "Virman", "Mirvan", "Marvin"];
    let now = 0;
    let timeout = null;
    const speed = 100; // Délai en millisecondes (ajuste cette valeur pour ralentir ou accélérer)

    // Fonction pour gérer la transition
    const transform = (step, end) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        now += step;
        if (now >= 0 && now < transitions.length) {
            marvin.style.opacity = 0; // Fait disparaître le texte
            setTimeout(() => {
                marvin.textContent = transitions[now];
                marvin.style.opacity = 1; // Fait réapparaître le texte
            }, speed / 2); // Délai pour la transition (moitié du délai total)
        }

        if ((step > 0 && now < end) || (step < 0 && now > end)) {
            timeout = setTimeout(() => transform(step, end), speed);
        }
    };

    // Déclenche l'animation au survol
    marvin.onmouseenter = () => transform(1, transitions.length - 1);

    // Déclenche l'animation inverse quand la souris quitte
    marvin.onmouseleave = () => transform(-1, 0);
})();
