var pijlknop = document.querySelector("main section:nth-of-type(2) img:first-of-type");
var overlay = document.querySelector("section:nth-of-type(2)");
var footer = document.querySelector("footer");

pijlknop.addEventListener("click", overlayNaarBeneden);

function overlayNaarBeneden() {
    overlay.classList.toggle("textexpend");
    pijlknop.classList.toggle("rotated");
    footer.classList.toggle("textexpend2");
}


var dropdown = document.querySelector("header li:nth-of-type(3) img")
var menu = document.querySelector("main article")
var section = document.querySelector("section")
var section2 = document.querySelector("section:nth-of-type(2)")
var footer = document.querySelector("footer")

dropdown.addEventListener("click", menuKlaptUit)

function menuKlaptUit() {
    menu.classList.toggle("dropdownhidden")
    dropdown.classList.toggle("iconrotation")
    section.classList.toggle("weg")
    section2.classList.toggle("weg")
    footer.classList.toggle("weg")
}