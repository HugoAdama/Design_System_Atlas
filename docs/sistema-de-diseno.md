# Sistema de Diseno y Tokens

Este documento detalla la estructura de tokens de diseno, la paleta cromatica, la tipografia y las reglas de accesibilidad implementadas en Atlas de Diseno.

---

## 1. Taxonomia de Tokens W3C (DTCG)

El diseno sigue el estandar propuesto por el Design Tokens Community Group (W3C), dividiendo las variables en tres niveles jerarquicos:

1. Tokens Primitivos (Global Tokens):
   Definen valores brutos y atomicos sin intencion semantica.
   - Colores base: `#fbfbfa`, `#090d16`, `#0047ff`, `#3b82f6`, `#d97706`.
   - Familias tipograficas: serif, sans-serif y monoespaciada.
2. Tokens Semanticos (Semantic Tokens):
   Asignan proposito contextual a los tokens primitivos segun su rol en la interfaz.
   - `--paper`: Color de fondo de lienzo principal.
   - `--paper-card`: Color de superficie para tarjetas y modales.
   - `--ink`: Color de texto primario y de alto contraste.
   - `--muted`: Color de texto secundario y descriptores.
   - `--cobalt`: Color de acento interactivo y foco de navegacion.
   - `--border`: Borde estructural visible.
   - `--border-subtle`: Separador secundario de bajo impacto visual.
3. Tokens de Componente (Component Tokens):
   Variables circunscritas al ambito de un componente especifico, calculadas a partir de tokens semanticos.
   - `--card-shadow`: Sombra de elevacion base para tarjetas.
   - `--card-shadow-hover`: Elevacion y halo interactivo en estado de suspension.

---

## 2. Paleta Cromatica: Minimalismo Suizo

La paleta se inspira en el diseno editorial internacional suizo, priorizando la legibilidad, la estructura ortogonal y un acento azul ultramar electrico.

### Modo Claro (Light Theme)

| Token | Valor Hex / RGBA | Proposito |
| :--- | :--- | :--- |
| `--paper` | `#fbfbfa` | Fondo general de la pagina (marfil calido) |
| `--paper-2` | `#eff2f6` | Fondos secundarios y contenedores anidados |
| `--paper-card` | `#ffffff` | Fondo de tarjetas y paneles elevados |
| `--ink` | `#090d16` | Tipografia principal (carbon pizarra) |
| `--muted` | `#4b5568` | Tipografia secundaria y subtitulos |
| `--cobalt` | `#0047ff` | Acento primario, botones activos y seleccion |
| `--cobalt-glow` | `rgba(0, 71, 255, 0.22)` | Sombra difusa de acento |
| `--border` | `rgba(9, 13, 22, 0.12)` | Borde de definicion estructural |
| `--border-subtle` | `rgba(9, 13, 22, 0.06)` | Separadores y lineas tenues |

### Modo Oscuro (Dark Theme)

| Token | Valor Hex / RGBA | Proposito |
| :--- | :--- | :--- |
| `--paper` | `#080b11` | Fondo general de la pagina (obsidiana profunda) |
| `--paper-2` | `#0e1422` | Fondos de componentes y barras de control |
| `--paper-card` | `#131b2e` | Fondo de tarjetas elevadas |
| `--ink` | `#f8fafc` | Tipografia principal de alto contraste |
| `--muted` | `#94a3b8` | Tipografia secundaria |
| `--cobalt` | `#3b82f6` | Acento azul electrico adaptado a fondos oscuros |
| `--cobalt-glow` | `rgba(59, 130, 246, 0.35)` | Halo luminoso para elementos interactivos |
| `--border` | `rgba(255, 255, 255, 0.12)` | Borde estructural para superficies oscuras |
| `--border-subtle` | `rgba(255, 255, 255, 0.06)` | Separadores sutiles |

---

## 3. Tipografia

El sistema combina tres familias con funciones diferenciadas:

1. Sans-Serif Primaria (`--sans`):
   - Pila: `"Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif`
   - Uso: Interfaz general, botones, navegacion, tablas y parrafos informativos.
2. Serif Editorial (`--serif`):
   - Pila: `"Bodoni Moda", "Didot", "Bodoni 72", Georgia, serif`
   - Uso: Titulares principales (`h1`, `h2`), frases de impacto y citas destacadas.
3. Monoespaciada Tecnica (`--mono`):
   - Pila: `ui-monospace, Menlo, Consolas, monospace`
   - Uso: Fragmentos de codigo, identificadores de tokens, valores numericos y badges.

---

## 4. Accesibilidad y Contraste WCAG 2.2

1. Relacion de Contraste de Texto:
   - Texto normal: Contraste minimo superior a 4.5:1 frente a su fondo correspondiente.
   - Texto grande (encabezados superiores a 24px): Contraste minimo superior a 3:1.
2. Elementos Interactivos:
   - Todo boton y control cuenta con estado `:focus-visible` claramente delimitado mediante contorno y halo de color `--cobalt`.
3. Accesibilidad de Movimiento:
   - Se incluye soporte nativo para la preferencia `@media (prefers-reduced-motion: reduce)`, desactivando transiciones pesadas para personas sensibles al movimiento.

---

## 5. Modularizacion de Hojas de Estilo (CSS)

Para optimizar el mantenimiento, la legibilidad y la depuracion de estilos, la arquitectura CSS esta dividida en modulos especializados dentro de `src/styles/`, centralizados mediante `@import` en `global.css`:

1. `tokens.css`:
   Definicion de variables primitivas y semanticas DTCG para los esquemas `:root`, `:root[data-theme="dark"]`, `:root[data-theme="light"]` y consultas de medios `prefers-color-scheme`.
2. `base.css`:
   Normalizacion tipografica, reglas generales para encabezados y parrafos, lienzo de fondo y textura sutil de papel.
3. `layout.css`:
   Cuadricula editorial asimetrica (`.ch`, `.side`, `.body`), barra de lectura y estructura contenedora.
4. `components.css`:
   Reglas de componentes de interfaz: cabecera (Masthead), barra de capitulos, paginacion, matrices de estados, caja de especimen interactivo, modal de busqueda, tarjetas de recursos y pie de pagina.
5. `trends.css`:
   Galeria visual de estilos modernos: Bento Grid de alto contraste en modos claro y oscuro, Neobrutalismo digital con sombras duras legibles, Glassmorphism y micro-interacciones.
6. `animations.css`:
   Aceleracion por hardware GPU con `translate3d`, transiciones de aparicion progresiva (`.reveal-on-scroll`) y bloque universal `@media (prefers-reduced-motion: reduce)`.

