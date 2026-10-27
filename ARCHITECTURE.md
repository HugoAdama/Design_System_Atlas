# Arquitectura de Software y Guía de Mantenimiento
## Atlas de Diseño — Design System & Architecture Guide

Este documento define la arquitectura técnica, las capas de responsabilidad, las convenciones de diseño y las directrices de mantenimiento del proyecto **Atlas de Diseño**.

---

## 1. Principios Arquitectónicos

1. **Desacoplamiento de Contenido y Presentación**: El contenido estructural (índices de búsqueda, navegación, tokens, recursos) reside en la capa de datos (`src/data/`) con tipado estricto (`src/types/`), no hardcodeado dentro del markup HTML o componentes Astro.
2. **Cero JS por Defecto (Static First)**: Astro compila a HTML y CSS puro. Solo se inyecta JavaScript en los componentes con interactividad progresiva (búsqueda, sliders comparativos, calculadora tipográfica, toggle de tema e idioma).
3. **Taxonomía de Tokens Estándar W3C DTCG**: Los tokens CSS siguen la jerarquía de 3 capas recomendada por el Design Tokens Community Group:
   - *Capa 1 (Global / Primitivos)*: Paleta cruda, fuentes, radios.
   - *Capa 2 (Semánticos)*: `--bg-canvas`, `--text-primary`, `--border-subtle`, `--accent-primary`.
   - *Capa 3 (Componentes)*: Variables con ámbito local de tarjeta, slider o botón.
4. **Composición Gráfica en GPU**: Las animaciones fluidas usan exclusivamente `transform: translate3d(...)` y `opacity` para evitar *reflows* o *repaints* del hilo principal de CPU, liberando `will-change` al finalizar.
5. **Calidad y Verificación Continua**: Cualquier cambio debe pasar la suite automatizada con `npm test` o `npm run audit`.

---

## 2. Mapa de Capas del Sistema

```
E:\Atlas_Design\
├── scripts/
│   └── qa-audit.js             # Pipeline de pruebas de calidad (20 verificaciones automáticas)
├── public/
│   └── favicon.svg             # Monograma vectorial de precisión (Drafting Grid + Beacon)
└── src/
    ├── types/                  # Capa 1: Contratos e Interfaces TypeScript
    │   └── index.ts            # (SearchItem, NavItem, UXLaw, DesignTokenItem, Locale, etc.)
    ├── data/                   # Capa 2: Fuentes de Verdad y Datos Desacoplados
    │   ├── navigation.ts       # Secciones, anclas (#) e identificadores de lectura
    │   ├── search.ts           # Índice de búsqueda bilingüe con tags y descriptores
    │   └── index.ts            # Re-exportador centralizado
    ├── i18n/                   # Capa 3: Sistema de Internacionalización
    │   ├── translations.ts     # Diccionario bilingüe (ES/EN) con tipos estrictos
    │   └── client.ts           # Runtime de reactividad instantánea en cliente
    ├── styles/                 # Capa 4: Arquitectura de Estilos y Tokens
    │   └── global.css          # Paleta Suiza, tokens DTCG, dark/light, micro-animaciones
    ├── components/             # Capa 5: Biblioteca de Componentes UI
    │   ├── [Layouts/Estructurales]
    │   │   ├── Masthead.astro          # Header con controles de tema, idioma y búsqueda
    │   │   ├── ChapterNav.astro        # Barra sticky: navegación por capítulos y conmutador de modo
    │   │   ├── ChapterPagination.astro # Paginador anterior/siguiente al pie de cada capítulo
    │   │   ├── Cover.astro             # Hero principal, síntesis y tabla de contenidos
    │   │   ├── SideTracker.astro       # Barra de navegación lateral fija + IntersectionObserver
    │   │   ├── Footer.astro            # Pie de página y créditos
    │   │   └── SearchModal.astro       # Diálogo modal de búsqueda instantánea (Ctrl+K)
    │   ├── [Secciones Temáticas]
    │   │   ├── SectionFundamentos.astro
    │   │   ├── SectionUX.astro
    │   │   ├── SectionFrontend.astro
    │   │   ├── SectionTendencias.astro
    │   │   └── SectionRecursos.astro
    │   └── [Organismos Interactivos]
    │       ├── BeforeAfterSlider.astro        # Comparador táctil/arrastrable antes-después
    │       ├── DoDontCompare.astro            # Tarjetas de patrones recomendados vs antipatrones
    │       ├── SpecimenPlate.astro            # Playground de tokens interactivo
    │       ├── TypeScaleCalculator.astro      # Calculadora matemática de escalas tipográficas
    │       ├── NavigationAnatomyDemo.astro    # Inspector visual de modelos de navegación y empty states
    │       └── ContainerQueryDemo.astro       # Laboratorio interactivo de @container queries en vivo
    ├── layouts/
    │   └── Layout.astro        # Shell HTML base, SEO, fuentes y prevención de FOUC
    └── pages/
        └── index.astro         # Orquestador de la página principal
```

---

## 3. Jerarquía y Ciclo de Vida de los Datos

### A. Capa de Tipos (`src/types/index.ts`)
Define las estructuras de datos que garantizan consistencia en todo el proyecto:
```typescript
export interface SearchItem {
  id: string;
  title: string;
  titleEn?: string;
  section: string;
  sectionEn?: string;
  href: string;
  desc: string;
  descEn?: string;
  tags?: string[];
}
```

### B. Capa de Datos (`src/data/`)
Para añadir un nuevo tema al buscador global, se agrega a `src/data/search.ts` sin necesidad de tocar `SearchModal.astro`. El buscador filtra automáticamente por coincidencias en español, inglés y etiquetas técnicas.

### C. Sistema i18n Reactivo (`src/i18n/`)
- En el servidor/build: Los componentes declaran atributos `data-i18n="clave"`, `data-i18n-placeholder="clave"` y `data-i18n-title="clave"`.
- En el cliente: Al pulsar `#lang-toggle`, `applyLanguage(lang)` recorre los nodos `data-i18n*` y los reemplaza en tiempo real sin recargar la página, conservando la posición exacta del usuario en el documento.
- Persistencia: Se guarda en `localStorage.getItem('atlas_lang')`.

---

## 4. Guía de Mantenimiento Paso a Paso

### 1. ¿Cómo agregar una nueva sección temática?
1. Añadir el identificador y metadatos en `src/data/navigation.ts`.
2. Crear el componente `src/components/SectionNueva.astro` utilizando clases de animación `.reveal-on-scroll` y estilos semánticos.
3. Agregar las claves de traducción correspondientes en `src/i18n/translations.ts` (en `es` y `en`).
4. Importar y renderizar la sección en `src/pages/index.astro`.
5. Ejecutar la auditoría de calidad:
   ```bash
   npm run audit
   ```

### 2. ¿Cómo agregar o modificar un elemento al buscador?
1. Abrir `src/data/search.ts`.
2. Agregar un objeto con `title`, `titleEn`, `section`, `sectionEn`, `href`, `desc`, `descEn` y `tags`.
3. Guardar el archivo; el modal lo indexará y soportará búsqueda bilingüe automáticamente.

### 3. ¿Cómo ajustar colores o tokens de diseño?
1. Abrir `src/styles/global.css`.
2. Para modo claro, modificar las variables bajo `:root`.
3. Para modo oscuro, modificar las variables bajo `@media (prefers-color-scheme: dark)` y `:root[data-theme="dark"]`.
4. Utilizar siempre las variables semánticas (`var(--paper)`, `var(--ink)`, `var(--border)`, `var(--cobalt)`), evitando colores hexadecimales quemados en selectores específicos.

---

## 5. Pipeline de Comandos de Calidad

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en background. |
| `npm run build` | Compila el sitio estático para producción en `dist/`. |
| `npm test` | Ejecuta la suite de 23 pruebas de validación arquitectónica. |
| `npm run audit` | Compila en producción y ejecuta la suite de auditoría en un solo paso. |
| `npm run check` | Comprueba tipos y advertencias estáticas de Astro. |
