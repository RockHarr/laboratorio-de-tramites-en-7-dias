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

# Lección 3 – Ejercicios 1 al 4  
## Laboratorio de Trámites en 7 Días (estilos básicos)

En esta lección se continúa trabajando con el mismo proyecto creado en la **Lección 2**  
(`Laboratorio de Trámites en 7 Días`), agregando ahora una hoja de estilos CSS y aplicando  
formatos simples al documento.

---

## Objetivo general

Aplicar estilos básicos al proyecto existente para:

- Separar estructura (HTML) de presentación (CSS).
- Modificar el fondo de la página.
- Cambiar el color de los títulos.
- Ajustar el tamaño y la posición de la imagen de apoyo.

Todo esto usando una **hoja de estilos externa** (`styles.css`) ubicada en `ASSETS/CSS`.

---

## Instrucciones de la actividad y cómo se cumplen

### Ejercicio 1 – Crear hoja de estilos

> “Utilizando el mismo proyecto de la lección 2, crear un archivo de hoja de estilos en la carpeta «CSS» llamado «styles.css».”

Se crea la siguiente estructura:

```txt
L2E2-3/
├── index.html
└── ASSETS/
    ├── IMG/
    │   └── tramite-ana-cedula.jpg
    ├── CSS/
    │   └── styles.css      ← Hoja de estilos creada en esta lección
    └── JS/
        └── script.js       ← Opcional, no requerido en L3

# Lección 2 – Ejercicios 2 y 3  
## Laboratorio de Trámites en 7 Días (versión evolucionada)

Este proyecto es la **continuación** del trabajo iniciado en la carpeta `L2E1/`.  
Tomamos la idea del **“Laboratorio de Trámites en 7 Días”** y la hacemos crecer para cumplir con los requerimientos de los **Ejercicios 2 y 3** de la Lección 2.

---

## Objetivos por ejercicio

### Ejercicio 2

> “Crear un proyecto que contenga (de forma ordenada en carpetas) una página web básica en HTML  
> llamada «index.html» utilizando el editor de texto, en donde se aplique la estructura del documento HTML  
> y seis etiquetas diferentes.”

En este proyecto se cumple:

- Estructura ordenada en carpetas.
- Archivo principal `index.html`.
- Uso de estructura HTML5 completa:
  - `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- Uso de **múltiples etiquetas semánticas**, más de las 6 mínimas:
  - `header`, `main`, `section`, `article`, `aside`, `footer`, `h1`, `h2`, `h3`, `p`, `figure`, `img`, `figcaption`, `button`.

### Ejercicio 3

> “Nuestra página debe ser un texto informativo que incluya una imagen de apoyo. Para esto crearemos la carpeta  
> ASSETS y dentro de esta una carpeta de nombre «IMG» en donde se almacenará una imagen relacionada con el texto  
> y que posteriormente se deberá integrar al documento HTML donde corresponda, accediendo mediante la ruta local.  
> Además, crearemos otra carpeta dentro de ASSETS llamada «CSS» donde luego crearemos nuestra hoja de estilos.”

En esta versión se cumple:

- Creación de carpeta `ASSETS` con:
  - `ASSETS/IMG` → imagen relacionada con el texto informativo.
  - `ASSETS/CSS` → hoja de estilos `styles.css`.
  - `ASSETS/JS` → script opcional para interacción (no exigido, pero añadido como mejora).
- Texto informativo sobre el **Laboratorio de Trámites** y las historias de Ana y Luis.
- Integración de la imagen mediante ruta local:
  - `<img src="ASSETS/IMG/..." alt="..." ... >` dentro de `<figure>`.

---

## Estructura del proyecto

```txt
L2E2-3/
├── index.html
└── ASSETS/
    ├── IMG/
    │   └── tramite-ana-cedula.jpg   # Imagen relacionada con el texto informativo
    ├── CSS/
    │   └── styles.css               # Hoja de estilos principal
    └── JS/
        └── script.js                # Lógica opcional para modo lectura


# Lección 2 – Ejercicio 1  
## Laboratorio de Trámites en 7 Días (versión base)

Este proyecto es la primera piedra de un laboratorio ficticio donde iremos probando ideas para hacer los trámites públicos más simples y entendibles, mientras practicamos desarrollo frontend.

En el Ejercicio 1 solo trabajamos con

- HTML5
- Estructura básica del documento
- Etiquetas semánticas

Los ejercicios siguientes (2 y 3) tomarán esta misma idea y la harán crecer con carpetas, estilos e imagen.

---

## Objetivo del ejercicio

- Crear una página `index.html` usando
  - `!DOCTYPE html`
  - `html`, `head`, `body`
  - y al menos seis etiquetas diferentes (en este caso `header`, `main`, `section`, `article`, `aside`, `footer`, `h1`, `h2`, `h3`, `p`).
- Practicar el uso de etiquetas semánticas para organizar el contenido.
- Comenzar un pequeño relato el “Laboratorio de Trámites en 7 Días”, que seguirá evolucionando en la Lección 2.

---

## Contenido de la página

La página muestra

- Un encabezado (`header`) con
  - Título principal “Laboratorio de Trámites en 7 Días”.
  - Un párrafo que explica de forma simple de qué se trata el laboratorio.

- Un contenido principal (`main`) que incluye
  - Una sección (`section`) con dos historias (`article`)
    - Ana, que necesita renovar su cédula.
    - Luis, que quiere postular a un beneficio.
  - Un bloque complementario (`aside`) que explica por qué hablamos de trámites.

- Un pie de página (`footer`) con
  - Un texto breve de créditos y referencia al ejercicio
    - “Lección 2 – Ejercicio 1”.

Todas las etiquetas principales están comentadas en el código para explicar su uso, siguiendo el enfoque de “modo aprendiz”.

---

## Archivo del proyecto

```txt
L2E1
└── index.html

