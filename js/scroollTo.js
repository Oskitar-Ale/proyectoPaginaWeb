
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
