# Arquitectura del Sistema

Atlas de Diseno implementa una arquitectura orientada a componentes desacoplados y orientada a contenido estatico con hidratacion selectiva.

---

## 1. Principios de Arquitectura

1. Separacion Estricta de Contenido y Presentacion: Los datos estructurados (rutas de navegacion, indices de busqueda, metadatos, listas de recursos) se almacenan en la capa de datos (`src/data/`) bajo contratos tipados en TypeScript (`src/types/`). Ningun componente visual debe contener colecciones de datos codificadas directamente en su plantilla.
2. Renderizado Estatico por Defecto (Static First): El sitio se pre-renderiza completamente a HTML y CSS nativo durante la fase de compilacion. Esto elimina la sobrecarga de tiempo de ejecucion de frameworks pesados en cliente.
3. Hidratacion Parcial y Progresiva: El codigo JavaScript en cliente se reserva unicamente para componentes interactivos criticos:
   - Control de modo de lectura y activacion de capitulos (`ChapterNav.astro`).
   - Modal de busqueda en vivo con atajos de teclado (`SearchModal.astro`).
   - Comparador de antes y despues con division arrastrable (`BeforeAfterSlider.astro`).
   - Calculadora dinamica de escalas tipograficas modulares (`TypeScaleCalculator.astro`).
   - Selector reactivo de idioma (`src/i18n/client.ts`).
   - Conmutador de tema claro y oscuro (`src/layouts/Layout.astro`).
4. Composicion Acelerada por Hardware: Las transiciones y revelados visuales operan sobre la GPU utilizando `transform: translate3d(...)` y `opacity`, liberando la propiedad `will-change` una vez completada la animacion para optimizar el consumo de memoria VRAM.

---

## 2. Mapa Estructural de Capas

El proyecto se divide en seis capas claramente delimitadas:

```
src/
|-- types/                  Capa 1: Interfaces y Contratos de Dominio
|   `-- index.ts            Definicion de tipos: SearchItem, NavItem, UXLaw, etc.
|
|-- data/                   Capa 2: Fuentes de Verdad y Datos Desacoplados
|   |-- navigation.ts       Definicion de capitulos, anclas e identificadores
|   |-- search.ts           Indice de busqueda bilingue con palabras clave y tags
|   `-- index.ts            Punto de exportacion unificado
|
|-- i18n/                   Capa 3: Sistema de Internacionalizacion
|   |-- translations.ts     Diccionario bilingue (Espanol / Ingles) fuertemente tipado
|   `-- client.ts           Motor de sustitucion y persistencia en cliente
|
|-- styles/                 Capa 4: Tokens y Reglas de Diseno
|   `-- global.css          Definicion de variables CSS W3C DTCG y temas
|
|-- components/             Capa 5: Biblioteca de Componentes UI
|   |-- Masthead.astro          Cabecera superior con controles globales
|   |-- ChapterNav.astro        Barra sticky de navegacion y seleccion de modo
|   |-- ChapterPagination.astro Paginador al pie de cada seccion
|   |-- Cover.astro             Hero principal y tabla de contenidos
|   |-- SideTracker.astro       Riel lateral con indicador de scroll y volver arriba
|   |-- SearchModal.astro       Dialogo modal accesible de busqueda instantanea
|   |-- SectionFundamentos.astro Capitulo 1: Fundamentos y tokens
|   |-- SectionUX.astro          Capitulo 2: Arquitectura de informacion y leyes UX
|   |-- SectionFrontend.astro    Capitulo 3: CSS moderno, Core Web Vitals e islas
|   |-- SectionTendencias.astro  Capitulo 4: Estilos visuales y micro-interacciones
|   `-- SectionRecursos.astro    Capitulo 5: Referencias oficiales y herramientas
|
`-- layouts/                Capa 6: Plantilla Base
    `-- Layout.astro        Estructura HTML5, metadatos SEO y prevencion de FOUC
```

---

## 3. Flujo de Datos y Ciclo de Vida

### Fase de Compilacion (Build Time)
1. Astro lee los componentes y los archivos de datos tipados (`src/data/`).
2. Se inyectan las claves de traduccion correspondientes mediante atributos de datos (`data-i18n`, `data-i18n-placeholder`, `data-i18n-title`).
3. Se genera un archivo unico `dist/index.html` estatico y optimizado junto con los activos empaquetados en `dist/_astro/`.

### Fase de Carga del Cliente (Runtime)
1. Prevencion de Parpadeo (Anti-FOUC): Un script sincrono en el `<head>` evalua `localStorage` y la preferencia del sistema operativo (`prefers-color-scheme`) para inyectar inmediatamente el atributo `data-theme="dark"` o `data-theme="light"` en la etiqueta `<html>`.
2. Evaluacion del Idioma: El motor i18n detecta si existe un idioma almacenado (`localStorage.getItem('atlas_lang')`) o toma el idioma del navegador, aplicando las traducciones sobre los elementos marcados.
3. Inicializacion del Modo de Lectura: El controlador de navegacion lee el parametro `atlas_view_mode` y la URL actual. Si el modo activo es `chapter`, oculta los capitulos inactivos y activa el capitulo correspondiente al hash de la URL.
