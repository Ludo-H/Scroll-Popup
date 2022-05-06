/***************** Réussi ! *************/


// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours


// Variables
const nav = document.querySelector("#navbar");
let startScroll = 0;

const picture = document.querySelector("#imgImprovise");

const popUp = document.querySelector("#popup");

const closeBtn = document.querySelector("#closeBtn");

let playOnce = true;


// Fonctions




// Evenements
window.addEventListener("scroll", () => {
    if(startScroll < window.scrollY){
        nav.style.height = "60px";
    }else{
        nav.style.height = "90px";
    }

    if(window.scrollY >= 250){
        picture.style.opacity = 1;
        picture.style.transform = "translateX(0px)";
    }

    if(window.scrollY >= 1200 && playOnce){
        popUp.style.opacity = 1;
        popUp.style.transform = "translateX(0px)";
        playOnce = false;
    }
});


closeBtn.addEventListener("click", () => {
    popUp.style.opacity = 0;
        popUp.style.transform = "translateX(500px)";
});

