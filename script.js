// animação ao scroll
const elements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.6;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); // opcional: se quiser voltar ao estado original
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// limpa URL
(function() {
  const url = new URL(window.location);
  if (url.searchParams.has('fbclid')) {
    url.searchParams.delete('fbclid');
    window.history.replaceState({}, document.title, url.pathname + url.search);
  }
})();

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



