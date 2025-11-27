# Lección 5 – Creando y vinculando mi primer script en JavaScript  
## Proyecto: Laboratorio de Trámites en 7 Días

Esta lección suma el **primer comportamiento en JavaScript** al proyecto que vengo trabajando desde las lecciones anteriores.  
El objetivo principal es **crear y vincular un archivo JS externo**, aplicando las buenas prácticas que vimos en clase.

---

## Objetivos de la lección

- Crear la carpeta `JS` y el archivo base `main.js`.
- Vincular correctamente el script desde el `index.html`:
  - archivo externo,
  - cargado al final del `<body>`.
- Usar:
  - `"use strict";`
  - `const` / `let`
  - eventos (`addEventListener`)
  - `console.log` / `console.warn` para depurar.
- Implementar una funcionalidad simple:
  - un botón **"Ir arriba"** que desplaza la página suavemente hasta el inicio.

---

## Estructura del proyecto en esta lección

La estructura base del proyecto queda así:

```txt
LaboratorioTramites/
├── index.html
└── ASSETS/
    ├── CSS/
    │   └── styles.css
    ├── JS/
    │   └── main.js
    └── IMG/
        └── ... (imágenes del proyecto)
