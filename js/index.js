//hace aparecer y desaparecer el navmenu del btn//
const navToggle = document.querySelector(".nav-toggle");
const navMenu= document.querySelector(".container-menu");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu__visible");
});




