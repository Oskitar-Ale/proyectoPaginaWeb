//murcielagos volando//

const movingImages = document.querySelectorAll('.murcielagos-volando');
const container = document.querySelector('body');

movingImages.forEach((img) => {
  setInterval(() => {
    const x = Math.floor(Math.random() * container.clientWidth);
    const y = Math.floor(Math.random() * container.clientHeight);
    img.style.transform = `translate(${x}px, ${y}px)`;
  }, 10000);
});
