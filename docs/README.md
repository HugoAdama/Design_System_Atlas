# Documentacion Tecnica — Atlas de Diseno

Bienvenido a la documentacion tecnica de Atlas de Diseno. Este repositorio contiene una guia exhaustiva sobre sistemas de diseno, arquitectura de informacion, patrones frontend modernos y tendencias visuales contemporaneas.

El proyecto esta construido sobre Astro, utilizando una arquitectura desacoplada por capas, diseno estatico con enriquecimiento progresivo e internacionalizacion bilingue nativa.

---

## Indice de Documentos

1. [Arquitectura del Sistema](arquitectura.md): Estructura modular del proyecto, separacion de contenido y presentacion, y ciclo de vida de los datos.
2. [Sistema de Diseno y Tokens](sistema-de-diseno.md): Taxonomia W3C DTCG, paleta Minimalista Suiza, tipografia, modos claro/oscuro y contraste WCAG 2.2.
3. [Navegacion y Experiencia de Usuario](navegacion-y-ux.md): Sistema hibrido de navegacion (Modo Capitulos vs Continuo), barra sticky, atajos de teclado y paginacion guiada.
4. [Internacionalizacion (i18n)](internacionalizacion.md): Motor bilingue reactivo en cliente (Espanol e Ingles), estructura del diccionario y atributos de renderizado.
5. [Guia de Mantenimiento y Calidad](guia-de-mantenimiento.md): Procedimientos paso a paso para extender secciones, anadir terminos de busqueda, modificar tokens y ejecutar la suite de pruebas automatizadas.

---

## Requisitos de Entorno

- Node.js: version 22.23.4 o superior
- Administrador de paquetes: npm version 10 o superior
- Framework base: Astro version 7.4.2

---

## Comandos Principales

- Iniciar servidor de desarrollo:
  ```bash
  npm run dev
  ```

- Compilar paquete de produccion:
  ```bash
  npm run build
  ```

- Ejecutar suite de pruebas de calidad arquitectonica:
  ```bash
  npm test
  ```

- Compilar y auditar el proyecto en un solo paso:
  ```bash
  npm run audit
  ```

- Comprobacion de tipos estaticos de Astro:
  ```bash
  npm run check
  ```
