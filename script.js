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
  const volverCartaBtn = document.getElementById("volverCartaBtn");

  // ✅ Mostrar botón "Volver a la carta" si la URL tiene ?from=form
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("from") === "form") {
    if (volverCartaBtn) {
      volverCartaBtn.style.display = "block";
    }
  }

  // ✅ Acción del botón "Volver a la carta"
  if (volverCartaBtn) {
    volverCartaBtn.addEventListener("click", () => {
      volverCartaBtn.style.display = "none";
      mostrarSeccion('carta1'); // Vuelve a la sección principal
    });
  }

  // ✅ Acción si acepta registrarse
  if (aceptarBtn) {
    aceptarBtn.addEventListener("click", () => {
      // Redirección al formulario con marca de regreso
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScbi6Yvm_FYCHGXEDE40N8ejmK0H7z7aDpiO-W7DXcHatrvNA/viewform?usp=header&from=form";
    });
  }

  // ✅ Cierra el modal
  if (cancelarBtn) {
    cancelarBtn.addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
  }

  // ✅ Acción del menú hamburguesa
  if (hamburger && navbarLinks) {
    hamburger.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // ✅ Cerrar menú cuando se hace clic en un botón
  const navbarButtons = document.querySelectorAll('.navbar-links button');
  navbarButtons.forEach(button => {
    button.addEventListener('click', () => {
      navbarLinks.classList.remove('active');     // Oculta botones
      hamburger.classList.remove('active');       // Regresa icono
    });
  });
});
