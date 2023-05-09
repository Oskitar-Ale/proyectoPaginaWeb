const navToggle = document.querySelector(".nav-toggle");
const navMenu= document.querySelector(".container-menu");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu__visible");
});



