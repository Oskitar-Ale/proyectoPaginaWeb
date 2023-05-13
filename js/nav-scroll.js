// aparacer el color del nav al scrolear//
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('container-nav--scrolled');
  } else {
    navbar.classList.remove('container-nav--scrolled');
  }
});
