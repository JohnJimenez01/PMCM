# Nuestro primer mes 🤍

Página web romántica, sin backend, lista para publicar en **GitHub Pages**.
Todas las fotos ya están incluidas y optimizadas. No necesitas saber programar
para personalizarla: **solo editas un archivo.**

---

## 1. Cómo personalizarla (lo único que tocas)

Abre el archivo **`js/config.js`** con cualquier editor de texto (o directamente
en GitHub con el ícono del lápiz ✏️). Ahí cambias:

| Qué | Dónde en `config.js` |
|-----|----------------------|
| Nombre o apodo de ella | `nombreElla` |
| Fecha del primer mes (alimenta el contador) | `fechaInicio` (formato `AAAA-MM-DD`) |
| Música de fondo (opcional) | `musica` |
| Textos de bienvenida | `bienvenida` |
| Mensaje del "Un mes de nosotros" | `unMes` |
| Fotos de la galería y sus descripciones | `galeria` |
| Frases de "Lo que me haces sentir" | `frases` |
| Línea de tiempo de recuerdos | `recuerdos` |
| **La carta** | `carta` → `parrafos` |
| Cierre | `cierre` |

> Consejo: cambia primero `nombreElla`, `fechaInicio` y la `carta`. Lo demás ya
> trae textos de ejemplo que puedes dejar o ajustar.

---

## 2. Cómo cambiar o agregar fotos

Las fotos viven en **`assets/fotos/`**. Para reemplazar una, sube una nueva
con **el mismo nombre** (ej. `foto-01.jpg`) y listo.

Para agregar una foto nueva a la galería:
1. Súbela a `assets/fotos/` (ej. `foto-09.jpg`).
2. En `config.js`, dentro de `galeria`, añade una línea:
   ```js
   { foto: "assets/fotos/foto-09.jpg", texto: "Tu descripción" },
   ```

**Tip:** para que cargue rápido en el celular, usa fotos de máximo ~1400 px de
ancho. Las actuales ya están optimizadas.

---

## 3. Música (opcional)

1. Pon tu canción en `assets/musica/` (ej. `cancion.mp3`).
2. En `config.js` escribe: `musica: "assets/musica/cancion.mp3",`
3. Aparecerá un botón ♪ arriba a la derecha. **Nunca suena sola**: ella debe
   tocar el botón (requisito de iPhone/Safari).

Si dejas `musica: ""`, el botón simplemente no aparece.

---

## 4. Publicar en GitHub Pages (paso a paso)

### a) Crear el repositorio
1. Entra a <https://github.com> e inicia sesión.
2. Clic en **New** (botón verde) para crear un repositorio nuevo.
3. Ponle un nombre, por ejemplo `primer-mes`.
4. Déjalo en **Public** y crea el repositorio.

### b) Subir los archivos
**Opción fácil (sin instalar nada):**
1. En el repositorio nuevo, clic en **uploading an existing file**.
2. Arrastra **el contenido** de la carpeta `primer-mes/` (es decir
   `index.html`, las carpetas `css`, `js` y `assets`, y este `README.md`).
   > Importante: sube el *contenido*, no la carpeta `primer-mes` dentro de otra carpeta.
   > El `index.html` debe quedar en la raíz del repositorio.
3. Abajo, clic en **Commit changes**.

### c) Activar GitHub Pages
1. En el repositorio, ve a **Settings** (⚙️).
2. En el menú izquierdo, entra a **Pages**.
3. En **Source**, elige **Deploy from a branch**.
4. En **Branch**, selecciona `main` y carpeta `/ (root)`. Clic en **Save**.

### d) Obtener el enlace
- Espera 1–2 minutos y recarga la página de **Pages**.
- Aparecerá tu enlace, con la forma:
  `https://TU-USUARIO.github.io/primer-mes/`

### e) Compartirlo con ella
- Copia ese enlace y envíalo por WhatsApp. Se abre directo en el navegador del
  iPhone, sin instalar nada.

---

## 5. Estructura del proyecto

```text
primer-mes/
├── index.html          ← página principal
├── css/
│   └── styles.css      ← estilos (normalmente no se toca)
├── js/
│   ├── config.js       ← AQUÍ editas todo el contenido
│   └── script.js       ← lógica (normalmente no se toca)
├── assets/
│   ├── fotos/          ← tus fotos
│   └── musica/         ← tu canción (opcional)
└── README.md
```

---

## 6. Notas técnicas

- Funciona sin servidor ni base de datos. Solo HTML, CSS y JavaScript.
- Optimizada para iPhone/Safari: áreas seguras (notch), alto `svh`, botones
  táctiles cómodos, sin efectos que dependan solo de pasar el mouse.
- Todas las rutas son relativas, así que funciona igual en local y publicada.
- Para probarla en tu computador antes de subir: abre `index.html` con doble clic.

Hecho con cariño. 🤍
