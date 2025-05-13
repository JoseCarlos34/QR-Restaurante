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

document.addEventListener("DOMContentLoaded", () => {
  const aceptarBtn = document.getElementById("aceptarBtn");
  const cancelarBtn = document.getElementById("cancelarBtn");
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  if (aceptarBtn && cancelarBtn) {
    aceptarBtn.addEventListener("click", () => {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeHtaKN7-218pPcd7ZuuqJTFGOEZZLDFhHDdqhDMMMFLHBGJg/viewform";
    });

    cancelarBtn.addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
  }

  if (hamburger && navbarLinks) {
    hamburger.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // ✅ Cerrar el menú al hacer clic en un botón del navbar
  const navbarButtons = document.querySelectorAll('.navbar-links button');
  navbarButtons.forEach(button => {
    button.addEventListener('click', () => {
      navbarLinks.classList.remove('active');     // Oculta botones
      hamburger.classList.remove('active');       // Regresa icono
    });
  });
});
