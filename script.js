// animação ao scroll
const elements = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowMiddle = window.innerHeight / 1;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementMiddle = rect.top + rect.height / 1;

      if (elementMiddle < windowMiddle) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

// bolinha carregando
window.addEventListener("load", () => {
const preloader = document.getElementById("preloader");
preloader.style.opacity = "0";
preloader.style.transition = "opacity .5s ease";
setTimeout(() => {
    preloader.style.display = "none";
}, 500);
});

window.scrollTo(0, 0);



