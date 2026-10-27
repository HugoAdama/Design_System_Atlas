# Guia de Mantenimiento y Calidad

Esta guia ofrece procedimientos paso a paso para extender, modificar y validar la aplicacion sin introducir errores ni regresiones tecnicas.

---

## 1. Procedimiento para Anadir un Nuevo Capitulo o Seccion

1. Registrar la Seccion en la Capa de Datos:
   Abra `src/data/navigation.ts` y anada el nuevo elemento a la coleccion `navigationItems`:
   ```typescript
   {
     id: 'arquitectura-ia',
     href: '#arquitectura-ia',
     titleKey: 'nav.arquitectura_ia',
     defaultTitle: 'IA y Diseno',
     badge: '06'
   }
   ```

2. Crear el Componente de Seccion:
   Cree el archivo `src/components/SectionIA.astro` estructurado con la clase estandar `ch`:
   ```astro
   ---
   import ChapterPagination from './ChapterPagination.astro';
   ---
   <section class="ch" id="arquitectura-ia">
     <div class="side reveal-on-scroll">
       <h2 data-i18n="ia.title">Inteligencia Artificial y Sistemas de Diseno</h2>
       <p data-i18n="ia.subtitle">Generacion automatica de componentes y tokens semanticos.</p>
     </div>
     <div class="body">
       <p class="reveal-on-scroll">Contenido...</p>
       
       <ChapterPagination
         prevId="recursos"
         prevTitleKey="nav.recursos"
         prevDefault="Recursos"
       />
     </div>
   </section>
   ```

3. Incorporar las Traducciones:
   En `src/i18n/translations.ts`, anada las claves correspondientes en ambos bloques (`es` y `en`):
   - `'nav.arquitectura_ia'`: `'IA y Diseno'` / `'AI & Design'`
   - `'ia.title'`: `'Inteligencia Artificial...'` / `'Artificial Intelligence...'`
   - `'ia.subtitle'`: `'Generacion automatica...'` / `'Automated generation...'`

4. Importar en la Pagina Principal:
   En `src/pages/index.astro`, importe `SectionIA` e insertela dentro de `<main id="top">`.

5. Ejecutar Auditoria de Calidad:
   Ejecute el comando para comprobar que todos los identificadores y enlaces se encuentren en regla:
   ```bash
   npm run audit
   ```

---

## 2. Procedimiento para Anadir un Termino al Buscador Global

1. Abra `src/data/search.ts`.
2. Anada una nueva entrada a `searchIndex`:
   ```typescript
   {
     id: 'ai-tokens',
     title: 'Tokens Predictivos con IA',
     titleEn: 'AI-Assisted Predictive Tokens',
     section: 'IA y Diseno',
     sectionEn: 'AI & Design',
     href: '#arquitectura-ia',
     desc: 'Modelos de lenguaje para la generacion coherente de contrastes.',
     descEn: 'Language models for consistent accessibility contrast generation.',
     tags: ['ai', 'tokens', 'predictive', 'llm']
   }
   ```
3. Guarde el archivo. El modal de busqueda (`SearchModal.astro`) leera el nuevo elemento inmediatamente sin necesidad de editar ningun componente de la interfaz.

---

## 3. Procedimiento para Ajustar Tokens de Estilo y Hojas Modulares

1. Para tokens globales y semanticos, abra `src/styles/tokens.css`.
2. Para alterar el aspecto general en modo claro, modifique las variables del bloque `:root` o `:root[data-theme="light"]`.
3. Para ajustar el aspecto en modo oscuro, modifique las variables correspondientes bajo `:root[data-theme="dark"]` y `@media (prefers-color-scheme: dark)`.
4. Emplee siempre variables semanticas (`var(--paper)`, `var(--ink)`, `var(--border)`, `var(--cobalt)`) en lugar de colores fijos codificados directamente en selectores.
5. Para estilos especificos, edite el archivo modular adecuado:
   - `src/styles/components.css` para componentes de interfaz.
   - `src/styles/trends.css` para tarjetas y efectos visuales de la galeria.
   - `src/styles/layout.css` para la cuadricula y disposicion de paginas.
   - `src/styles/animations.css` para keyframes y reglas de movimiento.

---

## 4. Pipeline de Pruebas de Calidad Automatizadas

El proyecto cuenta con un script de auditoria riguroso en `scripts/qa-audit.js`. Este script analiza el resultado estatico generado en `dist/index.html` y los archivos fuente para validar 25 criterios fundamentales:

1. Existencia del archivo compilado `dist/index.html`.
2. Unicidad del encabezado principal `h1` (exactamente 1, exigido para SEO y accesibilidad).
3. Existencia de los encabezados principales `h2` de las secciones tematicas.
4. Definicion valida del meta tag `viewport` con `viewport-fit=cover`.
5. Presencia del meta tag `description`.
6. Enlace valido al icono vectorial SVG `favicon.svg`.
7. Enlace valido al icono Apple Touch.
8. Atributo `lang` estandar en la etiqueta raiz `html`.
9. Definicion completa de etiquetas Open Graph y Twitter Cards para redes sociales.
10. Generacion y accesibilidad del archivo de directivas de indexacion `dist/robots.txt`.
11. Validacion de todos los enlaces internos (#hash): cero enlaces rotos.
12. Presencia de la barra de lectura `#reading-bar`.
13. Presencia del conmutador de tema `#theme-toggle`.
12. Presencia del conmutador de idioma `#lang-toggle`.
13. Presencia del modal accesible de busqueda `#search-dialog`.
14. Presencia del contenedor del comparador interactivo `#before-after-slider`.
15. Presencia de la calculadora de escala tipografica `#typescale-list`.
16. Presencia de la barra de navegacion sticky de capitulos `#chapter-nav-bar`.
17. Presencia de los controles de cambio de modo de lectura (capitulos vs continuo).
18. Presencia de los controles de paginacion entre capitulos `.chapter-pagination`.
19. Cobertura del 100% de traducciones para todos los elementos con atributo `data-i18n`.
20. Cumplimiento de la regla `@media (prefers-reduced-motion: reduce)`.
21. Declaracion explicita de tokens de modo oscuro.
22. Declaracion explicita de tokens de modo claro.
23. Empleo de aceleracion por hardware (`translate3d`) para fluidez grafica.

### Ejecucion de Comandos de Prueba

- Ejecutar unicamente la auditoria sobre la compilacion actual:
  ```bash
  npm test
  ```

- Compilar en produccion y auditar de forma consecutiva:
  ```bash
  npm run audit
  ```
