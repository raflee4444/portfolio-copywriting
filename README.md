# Portfolio web — Rafa Ahumada

Landing de una sola página para ofrecer servicios de redacción/copywriting freelance.
Corresponde al Bloque 2.2 del `plan-de-accion.md`, hecha en código en vez de con Carrd
para no depender de un plan de pago y poder alojarla gratis.

## Estructura

```
Portfolio-Web/
├── index.html      → contenido y estructura
├── css/style.css   → todo el diseño
├── js/script.js    → CONFIG editable + interacción (menú móvil, animaciones)
└── assets/         → aquí va tu foto y una imagen og-image.jpg (1200x630) si quieres
```

## Qué editar antes de publicar

Todo lo variable está centralizado en `js/script.js`, en el bloque `CONFIG` (arriba del
todo). No hace falta tocar el HTML:

- **`email`**: rafael.ahumada@gmail.com — el mismo que usas en tu otra web, para tener
  un único email profesional. No hay botón de WhatsApp (se ha quitado a propósito
  porque el número es personal).
- **`social`**: pega aquí tus URLs de Malt/Workana cuando tengas esos perfiles creados
  (Bloque 2.4 del plan). **LinkedIn se deja fuera a propósito**: tu perfil actual
  (linkedin.com/in/rafael-a-0b889626) está marcado como "en busca de empleo" para
  puestos de soporte/asistencia, lo que contradice el mensaje freelance de esta web.
  Dos opciones si más adelante quieres enlazarlo: (1) añadir una sección de
  "Servicios" en LinkedIn con tu oferta de redacción (Bloque 2.4 del plan ya lo
  contemplaba) y entonces sí enlazarlo aquí, o (2) dejarlo fuera y que el contacto
  vaya solo por email/Malt/Workana.
- **`samples`**: las 3 muestras del Bloque 2.1. Cada tarjeta es clicable: abre una
  ventana con el detalle. Mientras `ready` sea `false`, la ventana avisa de que la
  muestra está en preparación. Cuando publiques cada una (LinkedIn, Medium o PDF),
  pega la URL en `url` y cambia `ready` a `true` para que enlace directamente.

También puedes cambiar tu foto: sustituye el bloque `.photo-placeholder` (el marco con
el icono de silueta, en la sección "Quién soy") por una etiqueta `<img>` cuando tengas
una foto profesional.

## Cómo publicarla gratis

**Recomendado: GitHub Pages**, porque ya tienes cuenta y flujo probado (es como está
publicada tu otra web, `raflee4444.github.io/portfolio-profesional`). Usa un
repositorio nuevo y separado — no lo metas dentro del mismo repo que la web de
empleo, para que sean sitios independientes:

1. Crea un repositorio nuevo en GitHub, por ejemplo `portfolio-redaccion`.
2. Sube estos archivos (`index.html`, `css/`, `js/`, este `README.md`) a la rama
   `main`.
3. Settings → Pages → Deploy from branch → main → guardar.
4. URL resultante: `raflee4444.github.io/portfolio-redaccion`.

Si prefieres no tocar Git, la alternativa sin fricción es **Netlify Drop**
([app.netlify.com/drop](https://app.netlify.com/drop)): arrastras la carpeta
`Portfolio-Web` completa y en 10 segundos tienes una URL activa (editable después
en "Site settings"). Vercel funciona igual, arrastrando la carpeta en
[vercel.com/new](https://vercel.com/new). Cualquiera de las tres es gratis y sin
dominio propio de momento (eso se valida más adelante, ver `vias-de-ingresos.md`).

## Dominio propio (opcional, más adelante)

Cuando quieras algo como `rafaelahumada.com`, se compra el dominio (~10-15€/año en
Namecheap o similar) y se apunta a Netlify/Vercel/GitHub Pages sin coste extra de
hosting. Es un gasto a validar contigo antes, como dice el plan.

## Aviso

La baja médica no aparece en esta web (ver regla de `perfil-profesional.md` §5).
No se acepta ni se cobra ningún encargo mientras dure la baja: la web sirve para
mostrar el trabajo y recibir contactos, no para facturar todavía.
