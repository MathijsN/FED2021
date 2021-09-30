// JavaScript Document
var foto = document.querySelector(".Artwork1")
var knop = document.querySelector("section:nth-of-type(2) div:nth-of-type(2) button:nth-of-type(2)")
var knopkleur = document.querySelector("section:nth-of-type(2) div:nth-of-type(2) button:first-of-type")

knop.addEventListener("click", veranderAfbeelding)
knopkleur.addEventListener("click", veranderTerug)

function veranderAfbeelding() {
    foto.src = "images/Artwork 2.jpeg";
    knop.classList.add("knoppenKleurActief");

    knopkleur.classList.add("knoppenKleurNietActief");

    knop.classList.remove("standaardUit")
    knopkleur.classList.remove("standaardAan")
}


function veranderTerug() {
    foto.src = "images/artwork 1.jpeg";

    knop.classList.remove("knoppenKleurActief");

    knopkleur.classList.remove("knoppenKleurNietActief");

    knop.classList.add("standaardUit")
    knopkleur.classList.add("standaardAan")
}





