// Mostrar sección activa
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}

// Mostrar el modal después de 3 segundos
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

  // Asignar el evento al icono hamburguesa
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  if (hamburger && navbarLinks) {
    hamburger.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      hamburger.classList.toggle('active'); // Rotar icono hamburguesa
    });
  }
});
