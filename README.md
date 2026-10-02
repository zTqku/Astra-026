# Anuario Digital ASTRA 026

Sitio estático (HTML + CSS + JS). Sin instalación ni dependencias.

## 1. Archivos
Descomprime el ZIP: ya contiene todo (`index.html`, `alumnos.html`, `profesores.html`, `momentos.html`, `eventos.html`, `galeria.html`, `mensajes.html`, `recuerdos.html` y las carpetas `css/`, `js/`, `images/`). No tienes que crear nada: solo edita `js/data.js` y agrega fotos.

## 2. Escudo del colegio
`images/colegio.jpg` (ya incluido). Para cambiarlo, reemplaza el archivo conservando el nombre.

## 3. Logo ASTRA 026
`images/astra026.jpg` (ya incluido). Igual: reemplázalo conservando el nombre. Si usas .png, cambia `.jpg` por `.png` en `js/main.js` e `index.html`.

## 4. Fotografías
- Alumnos → `images/alumnos/`
- Profesores y dirección → `images/profesores/`
- Eventos → `images/eventos/`
- Galería y fotos grupales (`grupal1.jpg`, `grupal2.jpg`) → `images/galeria/`

Usa nombres simples, sin espacios ni tildes (`maria-gomez.jpg`) y fotos de ~1000 px de ancho para que carguen rápido en el celular.

## 5. Agregar alumnos (`js/data.js` → `ALUMNOS`)
Borra los de ejemplo y agrega un bloque por alumno:
```js
{nombre:"Nombre", curso:"3° Curso", foto:"images/alumnos/nombre.jpg",
 frase:"Su frase", descripcion:"Descripción...",
 galeria:["images/alumnos/nombre-1.jpg"]},   // galería: opcional
```
Sin foto se muestran las iniciales.

## 6. Agregar profesores (`PROFESORES` y `DIRECTIVOS`)
```js
{nombre:"Nombre", materia:"Matemática", foto:"images/profesores/nombre.jpg", mensaje:"Mensaje", descripcion:""},
```
El director y la directora van en `DIRECTIVOS` (usan `cargo` en lugar de `materia`).

## 7. Agregar fotografías
Copia la imagen a `images/galeria/` y agrega una línea en `GALERIA`:
`{src:"images/galeria/foto13.jpg", titulo:"Descripción"},`
Para eventos usa `fotos:[...]` dentro de cada evento. Momentos, mensajes y recuerdos se editan en el mismo archivo.
Los textos de "Nuestra Promoción" (historia, curso, frases) se editan en `index.html`, donde dice `[EJEMPLO]`.

## 8. Publicar gratis
**Netlify Drop (lo más fácil):** entra a app.netlify.com/drop y arrastra la carpeta `anuario` ya descomprimida.
**GitHub Pages:** crea un repositorio público → sube el contenido (`index.html` en la raíz) → Settings → Pages → Branch `main`, carpeta `/ (root)` → Save.

## 9. Obtener el enlace
Netlify te da uno al terminar (puedes cambiarlo en *Site settings*). En GitHub Pages será `https://TU-USUARIO.github.io/NOMBRE-REPO/` (tarda 1–2 minutos). Cada vez que cambies archivos, súbelos de nuevo y el sitio se actualiza.

## 10. Código QR
Usa un generador gratuito (por ejemplo qrcode-monkey.com o qr-code-generator.com), elige "URL", pega tu enlace y descarga el QR en PNG o SVG. Pruébalo con tu celular antes de imprimirlo.

Todo texto marcado "(ejemplo)" es de muestra: reemplázalo con los datos reales.
