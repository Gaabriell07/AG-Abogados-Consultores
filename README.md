# Arévalo Grández Abogados & Consultores — Sitio web

Sitio web institucional de **Arévalo Grández Abogados & Consultores S.A.C.**, estudio jurídico con sedes en Lima, Tarapoto y Tocache (Perú) que brinda asesoría legal a nivel nacional, presencial o virtual.

🔗 **Demo:** https://gaabriell07.github.io/AG-Abogados-Consultores/

---

## Características

- **Landing page de una sola página**, con un diseño sobrio y editorial pensado para un estudio jurídico.
- **Secciones:** Nosotros, Áreas de práctica, Profesionales, ¿Por qué elegirnos? y Ubicación.
- **Contacto directo por WhatsApp**, con el mensaje de consulta ya escrito.
- **Mapa de Google Maps** con la ubicación de la sede y botón "Cómo llegar".
- **Enlaces a redes sociales:** TikTok, Facebook y LinkedIn.
- **Diseño responsive**, probado en celulares de 360 a 430 px de ancho.
- **Rápido y ligero:** HTML estático, casi sin JavaScript, con imágenes optimizadas y carga diferida.
- **SEO básico:** título, descripción y etiquetas Open Graph para que el enlace se vea bien al compartirlo.
- **Accesibilidad:** HTML semántico, textos alternativos y respeto por la preferencia de "reducir movimiento".

## Tecnologías

- [Astro](https://astro.build) para generar el sitio estático.
- HTML y CSS propios, sin frameworks de estilos.
- Tipografías: Cormorant Garamond e Inter (Google Fonts).
- Publicación automática con GitHub Actions y GitHub Pages.

## Estructura del proyecto

```
├── public/
│   └── images/              # Fotografías del sitio
├── src/
│   ├── components/
│   │   ├── Header.astro     # Barra de navegación y menú móvil
│   │   ├── Foto.astro       # Imagen con recuadro de respaldo si falta el archivo
│   │   └── Icon.astro       # Íconos SVG de redes sociales
│   ├── data/
│   │   └── site.ts          # TODO el contenido del sitio (textos, contacto, sedes, equipo)
│   ├── layouts/
│   │   └── Base.astro       # Estructura HTML, metadatos y fuentes
│   ├── pages/
│   │   └── index.astro      # Página principal y sus estilos
│   └── styles/
│       └── global.css       # Paleta, tipografía y estilos generales
├── astro.config.mjs
└── .github/workflows/deploy.yml   # Despliegue automático a GitHub Pages
```

## Desarrollo local

Requiere **Node.js 22 o superior**.

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:4321/AG-Abogados-Consultores/
npm run build     # generar el sitio en /dist
npm run preview   # previsualizar la versión generada
```

## Editar el contenido

Todos los textos y datos están en **`src/data/site.ts`**, así que no hace falta tocar el diseño para actualizarlos:

| Qué cambiar | Dónde, dentro de `site.ts` |
|---|---|
| Teléfonos, WhatsApp, mensaje de WhatsApp y redes | `firma` |
| Sedes y direcciones | `firma.sedes` |
| Dirección del mapa | `mapa` |
| Textos de "Nosotros" | `nosotros` |
| Áreas de práctica | `areas.lista` |
| Abogados del equipo | `profesionales.equipo` |
| Tarjetas de "¿Por qué elegirnos?" | `porque.items` |

Las imágenes van en `public/images/`, con el mismo nombre de archivo que se indica en `site.ts`.

## Despliegue

Cada `push` a la rama `main` construye y publica el sitio automáticamente mediante GitHub Actions (`.github/workflows/deploy.yml`).

**Para usar un dominio propio** (por ejemplo `www.arevalograndez.com`):
1. En `astro.config.mjs`, cambia `site` por el dominio y elimina la línea `base`.
2. Configura el dominio en el servicio de hosting.

## Créditos de imágenes

- **Fotografías del equipo:** propiedad de Arévalo Grández Abogados & Consultores.
- **Palacio de Justicia de Lima:**
  - [Art DiNo](https://commons.wikimedia.org/wiki/File:Palacio_de_Justicia._Lima,_Per%C3%BA.jpg), licencia CC BY-SA 2.0.
  - [comicpie](https://commons.wikimedia.org/wiki/File:Palacio_De_Justicia,_Lima,_Peru.jpg), licencia CC BY 2.0.
  - [Rodolfo Pimentel](https://commons.wikimedia.org/wiki/File:Lima_14_Palacio_de_Justicia.jpg), licencia CC BY-SA 4.0.
- **Resto de fotografías:** dominio público o CC0, vía [Wikimedia Commons](https://commons.wikimedia.org). Provienen de Unsplash, Pexels, la Biblioteca del Congreso de EE.UU. y Joe Gratz en Flickr.

## Licencia

© Arévalo Grández Abogados & Consultores S.A.C. Todos los derechos reservados.
Los textos, la marca y las fotografías del equipo pertenecen al estudio y no pueden reutilizarse sin autorización.
