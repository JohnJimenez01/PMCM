/* ============================================================
   LÓGICA DEL SITIO — normalmente no necesitas editar esto.
   Todo el contenido se controla desde js/config.js
   ============================================================ */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const bgFoto = (el, url) => { if (url) el.style.backgroundImage = `url('${url}')`; };

  /* ---------- SECCIÓN 1: Bienvenida ---------- */
  $("#bv-saludo").textContent = CONFIG.bienvenida.saludo;
  $("#bv-titulo").textContent = CONFIG.bienvenida.titulo;
  $("#bv-sub").textContent    = CONFIG.bienvenida.subtitulo;
  $("#bv-boton").textContent  = CONFIG.bienvenida.boton;
  bgFoto($("#hero-foto"), CONFIG.bienvenida.foto);

  /* ---------- SECCIÓN 2: Un mes ---------- */
  $("#mes-titulo").textContent  = CONFIG.unMes.titulo;
  $("#mes-parrafo").textContent = CONFIG.unMes.texto;
  bgFoto($("#mes-foto"), CONFIG.unMes.foto);

  /* ---------- Contador de tiempo juntos ---------- */
  function actualizarContador() {
    const inicio = new Date(CONFIG.fechaInicio + "T00:00:00");
    const ahora = new Date();
    let diff = Math.max(0, ahora - inicio);
    const dia = 86400000;
    const dias = Math.floor(diff / dia);
    diff -= dias * dia;
    const horas = Math.floor(diff / 3600000); diff -= horas * 3600000;
    const min = Math.floor(diff / 60000); diff -= min * 60000;
    const seg = Math.floor(diff / 1000);
    const el = $("#contador");
    if (el) {
      el.innerHTML =
        `<b>${dias}</b> días · <b>${horas}</b> h · <b>${min}</b> m · <b>${seg}</b> s<br>` +
        `<span style="font-size:0.9rem;color:var(--texto-suave)">juntos 🤍</span>`;
    }
  }
  actualizarContador();
  setInterval(actualizarContador, 1000);

  /* ---------- SECCIÓN 3: Galería + Lightbox ---------- */
  const galeria = $("#galeria");
  const fotos = CONFIG.galeria || [];
  fotos.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "gal-item";
    div.innerHTML = `<img src="${item.foto}" alt="${item.texto || 'Foto nuestra'}" loading="lazy">`;
    div.addEventListener("click", () => abrirLightbox(i));
    galeria.appendChild(div);
  });

  // Construir lightbox
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lb-cerrar" aria-label="Cerrar">✕</button>
    <button class="lb-nav lb-prev" aria-label="Anterior">‹</button>
    <img class="lb-img" src="" alt="">
    <button class="lb-nav lb-next" aria-label="Siguiente">›</button>
    <p class="lb-texto"></p>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector(".lb-img");
  const lbTxt = lb.querySelector(".lb-texto");
  let actual = 0;

  function mostrar(i) {
    actual = (i + fotos.length) % fotos.length;
    lbImg.src = fotos[actual].foto;
    lbTxt.textContent = fotos[actual].texto || "";
  }
  function abrirLightbox(i) { mostrar(i); lb.classList.add("abierto"); document.body.style.overflow = "hidden"; }
  function cerrarLightbox() { lb.classList.remove("abierto"); document.body.style.overflow = ""; }

  lb.querySelector(".lb-cerrar").addEventListener("click", cerrarLightbox);
  lb.querySelector(".lb-prev").addEventListener("click", () => mostrar(actual - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => mostrar(actual + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) cerrarLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("abierto")) return;
    if (e.key === "Escape") cerrarLightbox();
    if (e.key === "ArrowLeft") mostrar(actual - 1);
    if (e.key === "ArrowRight") mostrar(actual + 1);
  });
  // Deslizar (swipe) en móvil
  let x0 = null;
  lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });

  /* ---------- SECCIÓN 4: Frases ---------- */
  const cf = $("#frases");
  (CONFIG.frases || []).forEach((f) => {
    const d = document.createElement("div");
    d.className = "frase reveal";
    d.textContent = f;
    cf.appendChild(d);
  });

  /* ---------- SECCIÓN 5: Recuerdos ---------- */
  const tl = $("#timeline");
  (CONFIG.recuerdos || []).forEach((r) => {
    const d = document.createElement("div");
    d.className = "recuerdo reveal";
    d.innerHTML =
      `<span class="fecha">${r.fecha || ""}</span>
       <h3>${r.titulo || ""}</h3>
       <p>${r.texto || ""}</p>` +
      (r.foto ? `<div class="rec-foto" style="background-image:url('${r.foto}')"></div>` : "");
    tl.appendChild(d);
  });

  /* ---------- SECCIÓN 6: Carta ---------- */
  $("#carta-titulo").textContent = CONFIG.carta.titulo;
  $("#carta-saludo").textContent = CONFIG.carta.saludo;
  $("#carta-firma").textContent  = CONFIG.carta.firma;
  const cuerpo = $("#carta-cuerpo");
  (CONFIG.carta.parrafos || []).forEach((p) => {
    const el = document.createElement("p");
    el.textContent = p;
    cuerpo.appendChild(el);
  });

  /* ---------- SECCIÓN 7: Cierre ---------- */
  $("#cierre-frase").textContent = CONFIG.cierre.frase;
  $("#cierre-sub").textContent   = CONFIG.cierre.subtitulo;
  bgFoto($("#cierre-foto"), CONFIG.cierre.foto);

  /* ---------- Reveal al desplazar ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Botón volver arriba ---------- */
  const btnTop = $("#btn-top");
  btnTop.hidden = false;
  window.addEventListener("scroll", () => {
    btnTop.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });
  btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Música (solo si está configurada; nunca autoplay) ---------- */
  if (CONFIG.musica && CONFIG.musica.trim() !== "") {
    const audio = $("#audio");
    const btn = $("#btn-musica");
    audio.src = CONFIG.musica;
    btn.hidden = false;
    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => { btn.classList.add("sonando"); })
                    .catch(() => {/* iOS puede bloquear; el usuario reintenta */});
      } else {
        audio.pause(); btn.classList.remove("sonando");
      }
    });
  }

  /* ---------- Partículas (corazones sutiles) ---------- */
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!mql.matches) {
    const cont = $("#particulas");
    const simbolos = ["🤍", "♡", "·"];
    const total = window.innerWidth < 600 ? 7 : 12;
    for (let i = 0; i < total; i++) {
      const p = document.createElement("span");
      p.className = "particula";
      p.textContent = simbolos[i % simbolos.length];
      p.style.left = Math.random() * 100 + "vw";
      p.style.fontSize = (12 + Math.random() * 16) + "px";
      p.style.animationDuration = (10 + Math.random() * 12) + "s";
      p.style.animationDelay = (Math.random() * 10) + "s";
      cont.appendChild(p);
    }
  }

})();
