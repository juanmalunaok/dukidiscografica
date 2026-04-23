# DUKI — The Complete Catalog 2016—2026

Archivo oficial de la discografía completa de Duki: **223 temas** — singles, discos, EPs y todas las colaboraciones.

Sitio estático en HTML5 + CSS + JavaScript vanilla (sin frameworks, sin build step).

## Estructura

```
├── index.html      # Markup principal
├── styles.css      # Estilos (diseño "expediente" rojo/amarillo/negro)
├── data.js         # Base de datos de 223 temas + info de álbumes
├── app.js          # Lógica (filtros, búsqueda, modal, stats)
└── vercel.json     # Config de deploy
```

## Correr en local

Abrí `index.html` directamente en el navegador, o serví la carpeta:

```bash
npx serve .
# o
python -m http.server 8000
```

## Deploy

Listo para deploy automático en Vercel desde GitHub.
