import type { SearchItem } from '../types';

export const searchIndex: SearchItem[] = [
  {
    id: 'dtcg-tokens',
    title: 'Design Tokens (DTCG)',
    titleEn: 'Design Tokens (DTCG)',
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#fundamentos',
    desc: 'Taxonomía W3C: Global, Semántico y Componente en formato estándar.',
    descEn: 'W3C Taxonomy: Global, Semantic, and Component in standard format.',
    tags: ['tokens', 'w3c', 'dtcg', 'json', 'variables']
  },
  {
    id: 'slider-comparador',
    title: 'Comparador Antes vs Después (Split Slider)',
    titleEn: 'Before vs After Comparator (Split Slider)',
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#before-after-slider',
    desc: 'Impacto visual interactivo de diseñar con mallas y tokens vs valores ad-hoc.',
    descEn: 'Interactive visual impact of designing with grids and tokens vs ad-hoc values.',
    tags: ['slider', 'grid', 'spacing', 'interactive']
  },
  {
    id: 'dodont-compare',
    title: "Buenas y Malas Prácticas (Do's & Don'ts)",
    titleEn: "Best & Anti-Patterns (Do's & Don'ts)",
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#fundamentos',
    desc: 'Patrones recomendados vs antipatrones en tokens, áreas táctiles y CLS.',
    descEn: 'Recommended patterns vs anti-patterns in tokens, touch targets, and CLS.',
    tags: ['best-practices', 'antipatterns', 'touch', 'cls']
  },
  {
    id: 'typescale-calc',
    title: 'Calculadora de Escala Tipográfica Modular',
    titleEn: 'Modular Type Scale Calculator',
    section: 'Información y UX',
    sectionEn: 'Information & UX',
    href: '#ux',
    desc: 'Generación en vivo de escalas tipográficas en rem y px con proporciones matemáticas.',
    descEn: 'Live mathematical type scale generation in rem and px ratios.',
    tags: ['typography', 'scale', 'modular', 'rem', 'px']
  },
  {
    id: 'tokens-playground',
    title: 'Playground de Tokens 2.0',
    titleEn: 'Tokens Playground 2.0',
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#spec',
    desc: 'Experimentación en vivo con exportación a CSS, Tailwind v4 y W3C JSON.',
    descEn: 'Live experimentation with export to CSS, Tailwind v4, and W3C JSON.',
    tags: ['playground', 'css', 'tailwind', 'export']
  },
  {
    id: 'estados-matriz',
    title: 'Matriz de Estados de Componentes',
    titleEn: 'Component States Matrix',
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#estados',
    desc: 'Default, hover, active, focus-visible, disabled y loading.',
    descEn: 'Default, hover, active, focus-visible, disabled, and loading.',
    tags: ['states', 'hover', 'focus', 'accessibility']
  },
  {
    id: 'wcag-contrast',
    title: 'Accesibilidad y Contraste WCAG 2.2',
    titleEn: 'Accessibility & WCAG 2.2 Contrast',
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#accesibilidad',
    desc: 'Ratios 4.5:1, 3:1, APCA y contraste no dependiente del color.',
    descEn: '4.5:1 and 3:1 ratios, APCA, and non-color dependent contrast.',
    tags: ['wcag', 'a11y', 'contrast', 'apca', 'color']
  },
  {
    id: 'gobernanza-designops',
    title: 'Gobernanza y DesignOps',
    titleEn: 'Governance & DesignOps',
    section: 'Fundamentos',
    sectionEn: 'Fundamentals',
    href: '#fundamentos',
    desc: 'Modelos centralizados vs distribuidos y ciclo de contribución.',
    descEn: 'Centralized vs federated models and contribution workflows.',
    tags: ['designops', 'governance', 'workflow']
  },
  {
    id: 'ley-hick',
    title: 'Ley de Hick',
    titleEn: "Hick's Law",
    section: 'UX e Información',
    sectionEn: 'UX & Information',
    href: '#ux-leyes',
    desc: 'El tiempo de decisión aumenta logarítmicamente con el número de opciones.',
    descEn: 'Decision time increases logarithmically with the number of options.',
    tags: ['ux', 'laws', 'psychology', 'decisions']
  },
  {
    id: 'ley-fitts',
    title: 'Ley de Fitts',
    titleEn: "Fitts's Law",
    section: 'UX e Información',
    sectionEn: 'UX & Information',
    href: '#ux-leyes',
    desc: 'Tamaño y distancia mínima de objetivos interactivos (44x44px).',
    descEn: 'Size and distance of interactive targets (44x44px minimum).',
    tags: ['ux', 'touch', 'targets', 'fitts']
  },
  {
    id: 'ley-miller',
    title: 'Ley de Miller',
    titleEn: "Miller's Law",
    section: 'UX e Información',
    sectionEn: 'UX & Information',
    href: '#ux-leyes',
    desc: 'Capacidad de memoria de trabajo humana: 7 ± 2 trozos (chunks).',
    descEn: 'Human working memory capacity: 7 ± 2 chunks.',
    tags: ['ux', 'memory', 'chunking', 'cognitive']
  },
  {
    id: 'ley-jakob',
    title: 'Ley de Jakob',
    titleEn: "Jakob's Law",
    section: 'UX e Información',
    sectionEn: 'UX & Information',
    href: '#ux-leyes',
    desc: 'Los usuarios esperan que tu interfaz funcione como las que ya conocen.',
    descEn: 'Users expect your interface to work like all the others they know.',
    tags: ['ux', 'mental-models', 'familiarity']
  },
  {
    id: 'anatomia-nav',
    title: 'Anatomía de Navegación y Empty States',
    titleEn: 'Navigation Anatomy & Empty States',
    section: 'UX e Información',
    sectionEn: 'UX & Information',
    href: '#ux',
    desc: 'Header, Sidebar, Bottom Navigation y estados de carga o error.',
    descEn: 'Header, Sidebar, Bottom Navigation, and loading/error states.',
    tags: ['navigation', 'empty-states', 'layout']
  },
  {
    id: 'container-queries',
    title: 'Modern CSS: @container queries',
    titleEn: 'Modern CSS: @container queries',
    section: 'Frontend',
    sectionEn: 'Frontend',
    href: '#frontend-moderno',
    desc: 'Componentes adaptables a su contenedor sin depender del viewport.',
    descEn: 'Components adapting to container size rather than viewport.',
    tags: ['css', 'container-queries', 'responsive']
  },
  {
    id: 'has-selector',
    title: 'Selector relacional :has()',
    titleEn: 'Relational Selector :has()',
    section: 'Frontend',
    sectionEn: 'Frontend',
    href: '#frontend-moderno',
    desc: 'Estilos condicionales ascendentes nativos sin necesidad de JS.',
    descEn: 'Parent style conditioning natively without JavaScript.',
    tags: ['css', 'selector', 'has', 'modern-css']
  },
  {
    id: 'view-transitions',
    title: 'View Transitions API',
    titleEn: 'View Transitions API',
    section: 'Frontend',
    sectionEn: 'Frontend',
    href: '#frontend-moderno',
    desc: 'Transiciones nativas y fluidas entre estados y páginas.',
    descEn: 'Smooth native transitions between page states and documents.',
    tags: ['css', 'animation', 'transitions', 'spa']
  },
  {
    id: 'core-web-vitals',
    title: 'Core Web Vitals para UI Designers',
    titleEn: 'Core Web Vitals for UI Designers',
    section: 'Frontend',
    sectionEn: 'Frontend',
    href: '#frontend-cwv',
    desc: 'INP (Interaction to Next Paint), LCP y CLS explicados para diseño.',
    descEn: 'INP (Interaction to Next Paint), LCP, and CLS explained for design.',
    tags: ['cwv', 'inp', 'lcp', 'cls', 'performance']
  },
  {
    id: 'islas-astro',
    title: 'Arquitectura de Islas Astro',
    titleEn: 'Astro Islands Architecture',
    section: 'Frontend',
    sectionEn: 'Frontend',
    href: '#frontend',
    desc: 'HTML estático con hidratación parcial client:visible.',
    descEn: 'Static HTML with selective client-side hydration.',
    tags: ['astro', 'islands', 'hydration', 'performance']
  },
  {
    id: 'glassmorphism-spatial',
    title: 'Glassmorphism & Spatial UI',
    titleEn: 'Glassmorphism & Spatial UI',
    section: 'Tendencias',
    sectionEn: 'Trends',
    href: '#tendencias',
    desc: 'Desenfoque backdrop-filter, refracción y elevaciones de cristal.',
    descEn: 'Backdrop-filter blur, refraction, and elevated glass layers.',
    tags: ['trends', 'glassmorphism', 'spatial', 'blur']
  },
  {
    id: 'bento-grid',
    title: 'Bento Grid Layout',
    titleEn: 'Bento Grid Layout',
    section: 'Tendencias',
    sectionEn: 'Trends',
    href: '#tendencias',
    desc: 'Composición modular y escaneable para dashboards y landings.',
    descEn: 'Modular, scannable composition for dashboards and landings.',
    tags: ['trends', 'bento', 'grid', 'layout']
  },
  {
    id: 'tipografia-variable',
    title: 'Tipografía Expresiva & Variable',
    titleEn: 'Expressive & Variable Typography',
    section: 'Tendencias',
    sectionEn: 'Trends',
    href: '#tendencias',
    desc: 'Ejes variables (wght, opsz, wdth) y tipografía cinética.',
    descEn: 'Variable font axes (wght, opsz, wdth) and kinetic typography.',
    tags: ['trends', 'variable-fonts', 'typography']
  },
  {
    id: 'neobrutalismo',
    title: 'Neobrutalismo Digital',
    titleEn: 'Digital Neobrutalism',
    section: 'Tendencias',
    sectionEn: 'Trends',
    href: '#tendencias',
    desc: 'Bordes negros de 3px, sombras duras y paletas primarias.',
    descEn: 'High contrast borders, hard drop shadows, and saturated primaries.',
    tags: ['trends', 'neobrutalism', 'contrast']
  },
  {
    id: 'recursos-specs',
    title: 'Recursos y Especificaciones',
    titleEn: 'Resources & Specifications',
    section: 'Recursos',
    sectionEn: 'Resources',
    href: '#recursos',
    desc: 'W3C DTCG, WAI-ARIA, blogs técnicos y bibliotecas de componentes.',
    descEn: 'W3C DTCG, WAI-ARIA, technical specs, and component libraries.',
    tags: ['resources', 'specs', 'w3c', 'aria']
  }
];
