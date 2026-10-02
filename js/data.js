/* ============ DATOS DEL ANUARIO ============
   Todo lo marcado "(ejemplo)" es de muestra. Reemplázalo con los datos reales.
   Si "foto" está vacía o la imagen no existe, se muestran las iniciales. */

// ALUMNOS: copia y pega un bloque { ... } por cada alumno.
const _al=n=>({nombre:`Alumno ${n} (ejemplo)`,curso:"Curso (ejemplo)",foto:"",frase:"Frase de ejemplo.",descripcion:"Descripción de ejemplo.",galeria:[]});
const ALUMNOS=[
  {nombre:"Alumno 1 (ejemplo)",curso:"Curso (ejemplo)",foto:"images/alumnos/alumno1.jpg",frase:"Frase de ejemplo.",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/alumno1-a.jpg"]}, // galería personal: opcional
  ...Array.from({length:17},(_,i)=>_al(i+2))   // 17 de relleno: bórralos al agregar los reales
];

// DIRECCIÓN: 1 director + 1 directora
const DIRECTIVOS=[
  {nombre:"Director (ejemplo)",cargo:"Director",foto:"images/profesores/director.jpg",mensaje:"Mensaje de ejemplo.",descripcion:""},
  {nombre:"Directora (ejemplo)",cargo:"Directora",foto:"images/profesores/directora.jpg",mensaje:"Mensaje de ejemplo.",descripcion:""}
];

// PROFESORES: 10
const PROFESORES=Array.from({length:10},(_,i)=>({nombre:`Profesor ${i+1} (ejemplo)`,materia:"Materia (ejemplo)",foto:"",mensaje:"Mensaje de ejemplo.",descripcion:""}));

// MOMENTOS (línea de tiempo)
const MOMENTOS=[
  {fecha:"Fecha (ejemplo)",titulo:"Primer día de clases (ejemplo)",texto:"Texto de ejemplo: cuenta aquí este momento."},
  {fecha:"Fecha (ejemplo)",titulo:"Actividades escolares (ejemplo)",texto:"Texto de ejemplo."},
  {fecha:"Fecha (ejemplo)",titulo:"Excursión (ejemplo)",texto:"Texto de ejemplo."},
  {fecha:"Fecha (ejemplo)",titulo:"Deportes (ejemplo)",texto:"Texto de ejemplo."},
  {fecha:"Fecha (ejemplo)",titulo:"Fiesta de despedida (ejemplo)",texto:"Texto de ejemplo."}
];

// EVENTOS: "fotos" = las que abre el botón "Ver fotografías"
const EVENTOS=[1,2,3].map(n=>({nombre:`Evento ${n} (ejemplo)`,fecha:"Fecha (ejemplo)",foto:`images/eventos/evento${n}.jpg`,descripcion:"Descripción de ejemplo.",fotos:[`images/eventos/evento${n}-1.jpg`,`images/eventos/evento${n}-2.jpg`]}));

// GALERÍA
const GALERIA=Array.from({length:12},(_,i)=>({src:`images/galeria/foto${i+1}.jpg`,titulo:`Foto de ejemplo ${i+1}`}));

// MENSAJES
const MENSAJES=[
  {texto:"Puede que terminemos el colegio, pero estos recuerdos nos van a acompañar siempre.",autor:"Alumno (ejemplo)"},
  {texto:"Mensaje de ejemplo para la promoción.",autor:"Alumno (ejemplo)"},
  {texto:"Mensaje de ejemplo para la promoción.",autor:"Alumno (ejemplo)"}
];

// RECUERDOS (se muestran al azar en la página "Recuerdos")
const RECUERDOS=[
  {texto:"Recuerdo de ejemplo número uno.",autor:"Alumno (ejemplo)"},
  {texto:"Recuerdo de ejemplo número dos.",autor:"Alumno (ejemplo)"},
  {texto:"Recuerdo de ejemplo número tres.",autor:"Alumno (ejemplo)"}
];
