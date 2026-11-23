# Web Arévalo Grández Abogados & Consultores

Landing page en Astro, con la estructura y el estilo de estudiorodrigo.com como referencia.

## Usar
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # genera /dist para subir a Netlify / Vercel / Cloudflare Pages

## Textos
Todo está en `src/data/site.ts`. Lo marcado con [CONFIRMAR] es texto de ejemplo.

## Imágenes (ponerlas en public/images/ con estos nombres)
- hero.jpg            portada a pantalla completa (horizontal, mínimo 1920px de ancho)
- banda-1.jpg         franja ancho completo
- galeria-1.jpg / galeria-2.jpg   dos fotos verticales lado a lado
- banda-2.jpg         franja con márgenes
- equipo-1.jpg ... equipo-4.jpg   retratos verticales (3:4)
- pub-1.jpg ... pub-4.jpg         miniaturas de publicaciones (4:3)
- banda-final.jpg     franja antes del footer

Mientras falte una imagen, se ve un recuadro verde con el nombre del archivo.
