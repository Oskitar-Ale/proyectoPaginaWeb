const navToggle = document.querySelector(".nav-toggle");
const navMenu= document.querySelector(".container-menu");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu__visible");
});



const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('container-nav--scrolled');
  } else {
    navbar.classList.remove('container-nav--scrolled');
  }
});


const movingImages = document.querySelectorAll('.murcielagos-volando');
const container = document.querySelector('body');

movingImages.forEach((img) => {
  setInterval(() => {
    const x = Math.floor(Math.random() * container.clientWidth);
    const y = Math.floor(Math.random() * container.clientHeight);
    img.style.transform = `translate(${x}px, ${y}px)`;
  }, 10000);
});
