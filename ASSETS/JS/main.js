"use strict";

/*
  Lección 5 – Primer script en JavaScript
  Funcionalidad: botón "Ir arriba" con desplazamiento suave (smooth scroll)
*/

// 1. Capturamos el botón por su id
const btnTop = document.getElementById("btnTop");

// 2. Verificamos que el botón exista en el DOM
if (btnTop) {
  // 3. Agregamos el evento click
  btnTop.addEventListener("click", function () {
    console.log("Botón 'Ir arriba' presionado ✅");

    // 4. Desplazamos la página suavemente hacia el inicio
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
} else {
  // Mensaje de apoyo para depuración en caso de que falle el id
  console.warn("No se encontró el botón con id 'btnTop'. ¿Está bien escrito en el HTML?");
}
