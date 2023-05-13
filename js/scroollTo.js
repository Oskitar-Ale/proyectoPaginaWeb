
//mal deslizamiento
// const inicio = document.querySelector("#inicio");
// const quienesSomos = document.querySelector("#quienes-somos");
// const productos = document.querySelector("#productos");
// const promociones = document.querySelector("#promociones");
// const servicios = document.querySelector("#servicios");
// const contactos = document.querySelector("#contactos");


// inicio.addEventListener("click", () => scrollToSection(0));
// quienesSomos.addEventListener("click", () => scrollToSection(1));
// productos.addEventListener("click", () => scrollToSection(2));
// promociones.addEventListener("click", () => scrollToSection(3));
// servicios.addEventListener("click", () => scrollToSection(4));
// contactos.addEventListener("click", () => scrollToSection(5));


// function scrollToSection(sectionIndex) {
//   const sections = document.querySelectorAll("section");
//   const targetSection = sections[sectionIndex];
//   const targetPosition = targetSection.offsetTop;

//   window.scrollTo({
//     top: targetPosition,
//     behavior: "smooth"
//   });
// }

const enlacesNav = document.querySelectorAll("nav a");

enlacesNav.forEach(enlace => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault();
    const indiceSeccion = enlace.dataset.section;
    desplazarseHaciaSeccion(indiceSeccion);
  });
});

function desplazarseHaciaSeccion(indiceSeccion) {
  const secciones = document.querySelectorAll("section");
  const seccionObjetivo = secciones[indiceSeccion];
  const posicionObjetivo = seccionObjetivo.offsetTop -100;

  window.scrollTo({
    top: posicionObjetivo,
    behavior: "smooth"
  });
}
