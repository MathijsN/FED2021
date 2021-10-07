// JavaScript Document
var foto = document.querySelector(".Artwork1");
var knop = document.querySelector("section:nth-of-type(2) div:nth-of-type(2) button:nth-of-type(2)");
var knopkleur = document.querySelector("section:nth-of-type(2) div:nth-of-type(2) button:first-of-type");

knop.addEventListener("click", veranderAfbeelding);
knopkleur.addEventListener("click", veranderTerug);

function veranderAfbeelding() {
    foto.src = "images/Artwork 2.jpeg";
    knop.classList.add("knoppenKleurActief");

    knopkleur.classList.add("knoppenKleurNietActief");

    knop.classList.remove("standaardUit");
    knopkleur.classList.remove("standaardAan");
}


function veranderTerug() {
    foto.src = "images/artwork 1.jpeg";

    knop.classList.remove("knoppenKleurActief");

    knopkleur.classList.remove("knoppenKleurNietActief");

    knop.classList.add("standaardUit");
    knopkleur.classList.add("standaardAan");
}


var dropdown = document.querySelector("header li:nth-of-type(3) img")
var menu = document.querySelector("main article")
var section = document.querySelector("section")
var section2 = document.querySelector("section:nth-of-type(2)")
var section3 = document.querySelector("section:nth-of-type(3)")
var section4 = document.querySelector("section:nth-of-type(4)")
var section5 = document.querySelector("section:nth-of-type(5)")
var section6 = document.querySelector("section:nth-of-type(6)")
var section7 = document.querySelector("section:nth-of-type(7)")
var footer = document.querySelector("footer")

dropdown.addEventListener("click", menuKlaptUit)

function menuKlaptUit() {
    menu.classList.toggle("dropdownhidden")
    dropdown.classList.toggle("iconrotation")
    section.classList.toggle("weg")
    section2.classList.toggle("weg")
    section3.classList.toggle("weg")
    section4.classList.toggle("weg")
    section5.classList.toggle("weg")
    section6.classList.toggle("weg")
    section7.classList.toggle("weg")
    footer.classList.toggle("weg")
}