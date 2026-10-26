# Yanax Studio Web + CMS

Landing local de Yanax Studio para presentar servicios de software, experiencias web y producto digital. Usa Next.js App Router, TypeScript, Tailwind CSS y GSAP/ScrollTrigger.

## Ejecutar

```bash
npm install
npm run dev
```

Abre la URL local que muestra Next.js. Para validar producción, ejecuta `npm run build`.

## Contenido y decisiones

La página incluye una apertura animada breve, hero con vista de producto, escenas ligadas al scroll, servicios, catálogo interactivo, enfoque, proceso, dos maquetas de concepto, presentación del estudio, preguntas frecuentes y llamada a contacto. Las maquetas son ejemplos visuales, no casos de clientes. La dirección de arte usa azul profundo, turquesa y naranja derivados del logo incluido en `public/logo-yanax.png`.

El contacto principal es WhatsApp `+593 96 324 9815`; las redes enlazadas son Instagram y TikTok `@yanax.dev`, según los datos proporcionados. Antes de publicar, reemplaza los conceptos por proyectos reales y revisa el texto de marca con el equipo. No hay CMS conectado todavía. La próxima fase es `/admin` con autenticación, edición de contenido, almacenamiento de imágenes y publicación.

El movimiento respeta `prefers-reduced-motion`; en ese modo se presenta todo el contenido sin entradas ni efectos vinculados al scroll.
