# EcoQuim — Examen de Homologación

Sitio web de demostración desarrollado para el examen de homologación de la
materia **Diseño y Creación de Páginas Web** (Carrera de Negocios Digitales,
Universidad Politécnica Salesiana).

Simula el flujo completo de un negocio digital: presentación del negocio →
catálogo de productos (con filtro por línea de negocio) → carrito de compras
→ datos del cliente → modalidad de entrega con costo de envío → confirmación
del pedido. **No usa backend, base de datos ni pasarela de pago real** — todo
el catálogo, el carrito y la lógica de compra corren en el navegador con
JavaScript propio.

El catálogo tiene **24 productos** repartidos en las 6 líneas reales del
negocio (Limpieza, Laboratorio, Automotriz, Perfumería, Mascotas y Envases).
Las líneas que no tienen foto en el catálogo original muestran un ícono SVG
propio por línea en su lugar (sin emojis, igual que el resto de la interfaz).

## Cómo abrirlo

Abrir `index.html` con doble clic (no necesita servidor). Requiere conexión a
internet solo para cargar Bootstrap 5 y los íconos (Font Awesome) desde su
CDN — el resto del sitio (HTML, CSS, JS, imágenes) es local.

## Estructura del proyecto

```
index.html          estructura de todas las secciones (landing, catálogo, carrito)
css/styles.css       estilos propios (colores, tipografía, tarjetas, carrito)
js/main.js           lógica propia: catálogo, carrito, logística, checkout
img/                 logotipo y fotografías de producto
```

## Datos de la declaración de IA

| Campo | Detalle |
|---|---|
| **Tema del proyecto** | Sitio de catálogo y carrito de compras para EcoQuim (negocio de limpieza, laboratorio y perfumería en Cuenca, Ecuador) |
| **Herramientas utilizadas** | HTML5, CSS3, JavaScript, Bootstrap 5, Font Awesome |
| **¿Utilizó IA generativa?** | Sí |
| **Herramienta(s) de IA** | Claude Code (Anthropic) |
| **Uso principal de la IA** | Programación del HTML/CSS/JS, depuración de errores (se detectó y corrigió un desborde horizontal en móvil causado por el gutter de Bootstrap), y redacción de esta documentación |

El estudiante revisó, entendió y puede explicar y modificar en vivo todo el
código entregado (estructura HTML, lógica del carrito en `js/main.js`, y los
estilos de `css/styles.css`).
