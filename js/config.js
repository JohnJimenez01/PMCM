/* ============================================================
   CONFIGURACIÓN — EDITA SOLO ESTE ARCHIVO
   ------------------------------------------------------------
   Aquí cambias nombres, fechas, mensajes, fotos y música.
   No necesitas tocar nada más. Guarda y sube de nuevo a GitHub.
   ============================================================ */

const CONFIG = {

  /* --- Datos básicos --- */
  nombreElla: "Mi amor",              // apodo o nombre de ella
  fechaInicio: "2026-10-26",          // fecha en que empezaron (AAAA-MM-DD). Alimenta el contador.

  /* --- Música de fondo (opcional) ---
     Pon tu archivo en assets/musica/ y escribe aquí su nombre.
     Si lo dejas vacío (""), no aparece el botón de música. */
  musica: "",                         // ej: "assets/musica/cancion.mp3"

  /* --- SECCIÓN 1: Bienvenida --- */
  bienvenida: {
    saludo: "Hola, preciosa",
    titulo: "Hoy cumplimos un mes 🤍",
    subtitulo: "Preparé algo pequeño para contarte lo que has significado este tiempo.",
    boton: "Tengo algo para ti ❤️",
    foto: "assets/fotos/foto-portada.jpg"
  },

  /* --- SECCIÓN 2: Un mes de nosotros --- */
  unMes: {
    titulo: "Un mes de nosotros",
    texto: "Apenas estamos empezando, y aun así este mes se sintió distinto. " +
           "Tenerte cerca volvió especiales hasta los días normales. " +
           "No sé qué tan lejos llegaremos, pero me gusta mucho estar averiguándolo contigo.",
    foto: "assets/fotos/foto-mes.jpg"
  },

  /* --- SECCIÓN 3: Galería ---
     Agrega, quita o reordena fotos aquí. Cada una: archivo y texto opcional.
     Deja "texto" vacío ("") si no quieres descripción. */
  galeria: [
    { foto: "assets/fotos/foto-01.jpg", texto: "Esa noche en el mirador" },
    { foto: "assets/fotos/foto-02.jpg", texto: "Bogotá entera debajo de nosotros" },
    { foto: "assets/fotos/foto-03.jpg", texto: "Contigo hasta las fotos salen mejor" },
    { foto: "assets/fotos/foto-04.jpg", texto: "Un café que duró horas" },
    { foto: "assets/fotos/foto-05.jpg", texto: "Me gusta este abrazo" },
    { foto: "assets/fotos/foto-06.jpg", texto: "Tú, en un día cualquiera" },
    { foto: "assets/fotos/foto-07.jpg", texto: "Las mañanas lentas" },
    { foto: "assets/fotos/foto-08.jpg", texto: "Guardo esta sonrisa" }
  ],

  /* --- SECCIÓN 4: Lo que me haces sentir ---
     Frases cortas. Edítalas con tus propias palabras. */
  frases: [
    "Me encanta la tranquilidad que me transmites.",
    "Me gusta encontrar razones nuevas para sonreír contigo.",
    "Qué bonito es coincidir contigo.",
    "No sabes lo distinto que haces mis días."
  ],

  /* --- SECCIÓN 5: Pequeños recuerdos ---
     Cada recuerdo: fecha, título, descripción y foto opcional ("" si no hay). */
  recuerdos: [
    { fecha: "26 de octubre", titulo: "El comienzo", texto: "El día en que todo esto empezó.", foto: "" },
    { fecha: "Una noche", titulo: "El mirador", texto: "La ciudad abajo y tú al lado. Difícil de olvidar.", foto: "assets/fotos/foto-01.jpg" },
    { fecha: "Una tarde", titulo: "Café sin apuro", texto: "Hablar por horas sin darnos cuenta del tiempo.", foto: "assets/fotos/foto-04.jpg" },
    { fecha: "Hoy", titulo: "Un mes", texto: "Y con ganas de que sigan muchos más.", foto: "" }
  ],

  /* --- SECCIÓN 6: Una carta para ti ---
     Escribe aquí tu carta. Cada elemento del arreglo es un párrafo.
     Edítala con tus propias palabras: entre más tuya, mejor. */
  carta: {
    titulo: "Una carta para ti",
    saludo: "Para ti,",
    parrafos: [
      "No soy el mejor con las palabras, pero quería dejarte algo escrito para este primer mes.",
      "Me gusta lo fácil que es estar contigo. Cómo pasa el tiempo sin que me dé cuenta y cómo, incluso en lo simple, la paso bien a tu lado.",
      "Gracias por estas semanas. Por tu compañía, por tu forma de ser, por aparecer.",
      "Apenas estamos empezando y ya me gusta hacia dónde va esto. Espero que sigamos sumando momentos como los de este mes.",
      "Gracias por este primer mes."
    ],
    firma: "Con cariño."
  },

  /* --- SECCIÓN 7: Cierre --- */
  cierre: {
    frase: "Feliz primer mes 🤍",
    subtitulo: "Esto fue para ti.",
    foto: "assets/fotos/foto-cierre.jpg"
  }

};
