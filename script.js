// Mostrar o ocultar el menú de navegación en móvil
function toggleMenu() {
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('show');
}

// Mostrar sección de la carta
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}

// Mostrar modal después de 3 segundos
setTimeout(() => {
  document.getElementById("modal").style.display = "flex";
}, 3000);

// Eventos de los botones del modal
document.addEventListener("DOMContentLoaded", () => {
  const aceptarBtn = document.getElementById("aceptarBtn");
  const cancelarBtn = document.getElementById("cancelarBtn");

  if (aceptarBtn && cancelarBtn) {
    aceptarBtn.addEventListener("click", () => {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeHtaKN7-218pPcd7ZuuqJTFGOEZZLDFhHDdqhDMMMFLHBGJg/viewform";
    });

    cancelarBtn.addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
  }
});
