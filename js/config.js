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
    { foto: "assets/fotos/foto-04.jpg", texto: "Un café y un postre eterno" },
    { foto: "assets/fotos/foto-05.jpg", texto: "Me gusta este abrazo" },
    { foto: "assets/fotos/foto-06.jpg", texto: "Tú, en un día cualquiera" },
    { foto: "assets/fotos/foto-07.jpg", texto: "Tu la menos tintera 😍" },
    { foto: "assets/fotos/foto-08.jpg", texto: "Que hermosa es mi nv" }
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
    saludo: "Mi bellorita,",
    parrafos: [
  "Quizás no sea el mejor con las palabras, pero hay cosas que merecen ser escritas, y hoy, que cumplimos nuestro primer mes, quería dedicarte unas cuantas.",
  "Me encanta lo fácil que es estar contigo, cómo el tiempo pasa sin que me dé cuenta y cómo hasta los momentos más sencillos se convierten en algo especial cuando los comparto a tu lado. Me gustan nuestras conversaciones, nuestras risas, tu forma de ser y esa bonita sensación que me queda cada vez que estoy contigo.",
  "Gracias por estas semanas, por tu compañía, tu cariño, cada detalle y por permitirme conocerte un poquito más cada día. Me alegra mucho que nuestros caminos se hayan encontrado y que estemos construyendo algo tan bonito.",
  "Y quiero que sepas algo: si hace un mes me preguntabas cuánto me gustabas, hoy, después de estos 31 días, puedo decirte que me gustas muchísimo más. Lejos de que la emoción del comienzo se haya ido, cada día encuentro algo nuevo que me hace admirarte, quererte y tener más ganas de seguir compartiendo contigo. Si algo ha cambiado en este primer mes, es que hoy me gustas mucho más que el día en que empezamos.",
  "Sé que apenas estamos comenzando, pero me ilusiona pensar en todo lo que todavía nos queda por vivir, los recuerdos que nos esperan y las historias que aún nos faltan por escribir.",
  "Ojalá este sea solamente el primero de muchísimos meses juntos. Me gustaría seguir disfrutando de ti, descubriéndote y construyendo algo cada vez más bonito, sin prisas, pero con muchas ganas.",
  "Gracias por este primer mes, preciosa. Me haces muy feliz. ❤️"
],
    firma: "Con cariño.",
    firma: "Tu novio John Jimenez."
  },

  /* --- SECCIÓN 7: Cierre --- */
  cierre: {
    frase: "Feliz primer mes 🤍",
    subtitulo: "Esto fue para ti.",
    foto: "assets/fotos/foto-cierre.jpg"
  }

};
