# Continuar Yanax Studio Web + CMS en Codex

Trabaja en este repositorio Next.js App Router + TypeScript + Tailwind + GSAP. La landing pública está en `src/app/page.tsx` y sus estilos en `src/app/globals.css`.

## Dirección aprobada para explorar

Yanax presenta software, producto digital y experiencias web. Usa el logo real en `public/logo-yanax.png` y su paleta de azul profundo, turquesa y naranja. El sitio debe sentirse inmersivo y editorial: tipografía grande, movimiento vinculado al scroll, composiciones de interfaz y cambios de ritmo entre secciones. El usuario compartió `https://herasymenkox.com/` como referencia de energía e interacción; no copies sus gráficos ni su contenido.

La landing contiene presentación, servicios, catálogo interactivo, enfoque, proceso, exploraciones visuales, estudio, preguntas frecuentes y contacto. Las dos exploraciones son conceptos de muestra; no las presentes como clientes reales. El contacto confirmado es WhatsApp +593 96 324 9815; Instagram y TikTok usan @yanax.dev. Revisa el copy de marca antes de publicar. Respeta `prefers-reduced-motion`, teclado, foco visible y rendimiento móvil.

## Próxima tarea

Construye `/admin` para editar proyectos, entradas del catálogo, textos, fotografías, estados borrador/publicado y orden de aparición. Propón primero un modelo de contenido y una capa `lib/cms`. Usa datos tipados locales hasta recibir credenciales y decisión de backend. Integra Supabase Auth/Postgres/Storage solo después de definir acceso, esquema y políticas. No expongas claves secretas en el cliente.

Antes de entregar cualquier cambio ejecuta `npm run build` y revisa el resultado en pantalla cuando el entorno lo permita.
