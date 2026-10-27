// Comprehensive Bilingual (ES/EN) Dictionary for Atlas de Diseño
export type Language = 'es' | 'en';
export type TranslationKey = keyof typeof translations['es'];

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Masthead & Navigation Controls
    'nav.fundamentos': 'Fundamentos',
    'nav.ux': 'Información y UX',
    'nav.frontend': 'Frontend',
    'nav.tendencias': 'Tendencias',
    'nav.recursos': 'Recursos',
    'nav.mode.label': 'Vista:',
    'nav.mode.chapters': 'Por Capítulos',
    'nav.mode.continuous': 'Continuo',
    'nav.prev': 'Capítulo anterior',
    'nav.next': 'Siguiente capítulo',
    'nav.chapter': 'Capítulo',
    'btn.search': 'Buscar',
    'btn.theme': 'Tema',
    'btn.lang': 'ES',

    // Cover / Hero
    'hero.badge': 'Atlas de diseño • Edición 2026',
    'hero.title.line1': 'La arquitectura invisible',
    'hero.title.line2': 'de cada pantalla',
    'hero.description': 'Una guía de consulta permanente sobre design systems, arquitectura de información, patrones frontend modernos y tendencias visuales. Para leer con calma o para resolver una duda en segundos.',
    'toc.fundamentos.title': 'Fundamentos',
    'toc.fundamentos.sub': 'Tokens DTCG, componentes, accesibilidad y gobernanza',
    'toc.ux.title': 'Información y UX',
    'toc.ux.sub': 'Leyes cognitivas, jerarquía y modelos de navegación',
    'toc.frontend.title': 'Frontend',
    'toc.frontend.sub': 'Modern CSS, Core Web Vitals e islas Astro',
    'toc.tendencias.title': 'Tendencias',
    'toc.tendencias.sub': 'Neobrutalismo, Bento, Glassmorphism y kinetic type',
    'toc.recursos.title': 'Recursos',
    'toc.recursos.sub': 'Especificaciones oficiales, blogs y herramientas',

    // Section Fundamentos
    'fundamentos.title': 'Sistemas de diseño',
    'fundamentos.subtitle': 'El lenguaje común entre diseño y desarrollo para construir interfaces predecibles y escalables.',
    'fundamentos.quote': 'Un sistema de diseño no es un documento: es una arquitectura.',
    'fundamentos.impact.title': 'El impacto de un sistema en la pantalla',
    'fundamentos.impact.p': 'Un sistema de diseño transforma decisiones arbitrarias y aisladas en reglas estructurales predecibles. Desliza para comparar una interfaz construida sin sistema frente a una regida por tokens semánticos:',
    'fundamentos.playground.title': 'Playground de Design Tokens',
    'fundamentos.taxonomy.title': 'Taxonomía de Design Tokens (Estándar W3C / DTCG)',
    'fundamentos.taxonomy.p': 'El Design Tokens Community Group (DTCG) estandariza el formato JSON para compartir tokens entre Figma, código CSS y aplicaciones nativas. Se estructuran en tres capas jerárquicas:',
    'fundamentos.dodont.title': 'Buenas y Malas Prácticas (Do\'s & Don\'ts)',
    'fundamentos.dodont.p': 'Diseñar un sistema de diseño requiere evitar antipatrones comunes que degradan la mantenibilidad a largo plazo:',
    'fundamentos.states.title': 'Matriz de estados indispensables',
    'fundamentos.states.p': 'Todo componente interactivo debe diseñar y codificar sus 6 estados fundamentales para garantizar previsibilidad y accesibilidad cognitiva:',
    'fundamentos.wcag.title': 'Accesibilidad y Contraste (WCAG 2.2)',
    'fundamentos.wcag.p': 'El color nunca debe ser el único canal para transmitir información. El estándar WCAG 2.2 exige ratios de contraste mínimos auditables:',
    'fundamentos.atomic.title': 'Atomic Design',
    'fundamentos.atomic.note': 'El método de Brad Frost: cada nivel se arma con el anterior.',
    'fundamentos.gov.title': 'Gobernanza y DesignOps',
    'fundamentos.gov.p': 'Quién puede cambiar el sistema define cuánto dura.',

    // Section UX
    'ux.title': 'Arquitectura de información y UX',
    'ux.subtitle': 'La estructura que precede al píxel: cómo viaja la atención humana a través de una pantalla.',
    'ux.laws.title': 'Leyes cognitivas aplicadas a la interfaz',
    'ux.laws.p': 'Principios psicológicos indispensables para justificar cualquier decisión de layout y carga cognitiva:',
    'ux.calc.title': 'Herramienta: Calculadora de Escala Tipográfica Modular',
    'ux.calc.p': 'Una escala modular calcula el tamaño armónico de cada nivel tipográfico multiplicando un valor base por una razón matemática geométrica:',
    'ux.nav.title': 'Anatomía de navegación y modelos de pantalla',
    'ux.states.title': 'Estados de pantalla: Vacío, Carga y Error',
    'ux.states.p': 'Una arquitectura sólida prevé el comportamiento de la interfaz cuando los datos no están disponibles:',
    'ux.principles.title': 'Principios de diseño de información',
    'ux.process.title': 'Proceso práctico de diseño',

    // Section Frontend
    'frontend.title': 'Arquitectura frontend y patrones técnicos',
    'frontend.subtitle': 'La capa de implementación que garantiza escalabilidad, velocidad y mantenimiento.',
    'frontend.modern.title': 'Capacidades modernas de CSS (2025–2026)',
    'frontend.modern.p': 'El estándar web ha absorbido patrones que antes requerían complejas librerías de JavaScript:',
    'frontend.cwv.title': 'Core Web Vitals para Diseñadores de UI',
    'frontend.cwv.p': 'Las decisiones visuales determinan directamente el rendimiento real experimentado por el usuario:',
    'frontend.patterns.title': 'Patrones arquitectónicos de interfaz',
    'frontend.island.title': 'Una isla Astro en la práctica',

    // Section Tendencias
    'tendencias.title': 'Tendencias y estilos visuales',
    'tendencias.subtitle': 'Una sección que se actualiza y que también sirve como archivo de lo que fue y de lo que se consolidó.',
    'tendencias.spring.label': 'Interacción con muelle',
    'tendencias.spring.active': '¡Resorte activado!',
    'tendencias.spring.desc': 'Física y Feedback Háptico',

    // Section Recursos
    'recursos.title': 'Recursos, blogs y herramientas',
    'recursos.subtitle': 'La sección a la que se vuelve. Enlaces contrastados y actualizados con especificaciones vivas para el trabajo diario.',
    'recursos.tab.all': 'Todos',
    'recursos.tab.specs': 'Especificaciones W3C',
    'recursos.tab.tools': 'Herramientas',
    'recursos.tab.ux': 'UX & Usabilidad',
    'recursos.tab.blogs': 'Publicaciones',

    // Search Dialog
    'search.placeholder': 'Buscar conceptos, tokens, leyes de UX o patrones...',
    'search.hint.nav': 'Navegar con ↑ / ↓ • Enter para abrir',
    'search.hint.esc': 'ESC para cerrar',

    // Side Tracker
    'tracker.aria': 'Navegación rápida de capítulos',
    'tracker.top': 'Volver arriba',

    // Footer
    'footer.colophon': 'Atlas de diseño web y sistemas de componentes',
    'footer.license': 'Inspirado en la tipografía editorial suiza y los estándares web abiertos.',
  },
  en: {
    // Masthead & Navigation Controls
    'nav.fundamentos': 'Fundamentals',
    'nav.ux': 'Information & UX',
    'nav.frontend': 'Frontend',
    'nav.tendencias': 'Trends',
    'nav.recursos': 'Resources',
    'nav.mode.label': 'View:',
    'nav.mode.chapters': 'By Chapters',
    'nav.mode.continuous': 'Continuous',
    'nav.prev': 'Previous chapter',
    'nav.next': 'Next chapter',
    'nav.chapter': 'Chapter',
    'btn.search': 'Search',
    'btn.theme': 'Theme',
    'btn.lang': 'EN',

    // Cover / Hero
    'hero.badge': 'Design Atlas • 2026 Edition',
    'hero.title.line1': 'The invisible architecture',
    'hero.title.line2': 'of every screen',
    'hero.description': 'A permanent reference guide to design systems, information architecture, modern frontend patterns, and visual trends. For calm reading or solving a question in seconds.',
    'toc.fundamentos.title': 'Fundamentals',
    'toc.fundamentos.sub': 'DTCG tokens, components, accessibility, and governance',
    'toc.ux.title': 'Information & UX',
    'toc.ux.sub': 'Cognitive laws, hierarchy, and navigation models',
    'toc.frontend.title': 'Frontend',
    'toc.frontend.sub': 'Modern CSS, Core Web Vitals, and Astro islands',
    'toc.tendencias.title': 'Trends',
    'toc.tendencias.sub': 'Neobrutalism, Bento, Glassmorphism, and kinetic type',
    'toc.recursos.title': 'Resources',
    'toc.recursos.sub': 'Official specs, technical blogs, and design tools',

    // Section Fundamentos
    'fundamentos.title': 'Design Systems',
    'fundamentos.subtitle': 'The common language between design and engineering to build predictable, scalable interfaces.',
    'fundamentos.quote': 'A design system is not a document: it is an architecture.',
    'fundamentos.impact.title': 'The impact of a system on the screen',
    'fundamentos.impact.p': 'A design system transforms arbitrary, isolated decisions into predictable structural rules. Drag to compare an ad-hoc interface against one governed by semantic tokens:',
    'fundamentos.playground.title': 'Design Tokens Playground',
    'fundamentos.taxonomy.title': 'Design Token Taxonomy (W3C / DTCG Standard)',
    'fundamentos.taxonomy.p': 'The Design Tokens Community Group (DTCG) standardizes JSON format to bridge Figma, CSS code, and native apps. They are structured into three hierarchical tiers:',
    'fundamentos.dodont.title': 'Best Practices & Pitfalls (Do\'s & Don\'ts)',
    'fundamentos.dodont.p': 'Building a design system requires avoiding common antipatterns that degrade long-term maintainability:',
    'fundamentos.states.title': 'Essential Component State Matrix',
    'fundamentos.states.p': 'Every interactive component must define and code its 6 core states to ensure predictability and cognitive accessibility:',
    'fundamentos.wcag.title': 'Accessibility & Contrast (WCAG 2.2)',
    'fundamentos.wcag.p': 'Color must never be the sole channel for conveying information. WCAG 2.2 mandates verifiable minimum contrast ratios:',
    'fundamentos.atomic.title': 'Atomic Design',
    'fundamentos.atomic.note': 'Brad Frost\'s methodology: each level is composed of the preceding one.',
    'fundamentos.gov.title': 'Governance & DesignOps',
    'fundamentos.gov.p': 'Who can change the system defines how long it lasts.',

    // Section UX
    'ux.title': 'Information Architecture & UX',
    'ux.subtitle': 'The structure that precedes the pixel: how human attention navigates through a screen.',
    'ux.laws.title': 'Cognitive Laws Applied to UI',
    'ux.laws.p': 'Indispensable psychological principles to justify layout and cognitive load decisions:',
    'ux.calc.title': 'Tool: Modular Type Scale Calculator',
    'ux.calc.p': 'A modular scale calculates harmonic font sizes by multiplying a base rem value with a geometric mathematical ratio:',
    'ux.nav.title': 'Navigation Anatomy & Screen Models',
    'ux.states.title': 'Screen States: Empty, Loading, and Error',
    'ux.states.p': 'A robust architecture anticipates interface behavior when dynamic data is not yet available:',
    'ux.principles.title': 'Information Design Principles',
    'ux.process.title': 'Practical Design Process',

    // Section Frontend
    'frontend.title': 'Frontend Architecture & Tech Patterns',
    'frontend.subtitle': 'The implementation layer guaranteeing scalability, speed, and long-term maintainability.',
    'frontend.modern.title': 'Modern CSS Capabilities (2025–2026)',
    'frontend.modern.p': 'The web standard has absorbed patterns that once required complex JavaScript libraries:',
    'frontend.cwv.title': 'Core Web Vitals for UI Designers',
    'frontend.cwv.p': 'Visual design decisions directly dictate the actual performance experienced by real users:',
    'frontend.patterns.title': 'Architectural Interface Patterns',
    'frontend.island.title': 'An Astro Island in Practice',

    // Section Tendencias
    'tendencias.title': 'Visual Styles & Design Trends',
    'tendencias.subtitle': 'A living section capturing current aesthetics while archiving solidified industry standards.',
    'tendencias.spring.label': 'Spring physics interaction',
    'tendencias.spring.active': 'Spring triggered!',
    'tendencias.spring.desc': 'Physics & Haptic Feedback',

    // Section Recursos
    'recursos.title': 'Resources, Blogs & Tools',
    'recursos.subtitle': 'The bookmarkable reference list. Curated, up-to-date specs for daily design and engineering work.',
    'recursos.tab.all': 'All',
    'recursos.tab.specs': 'W3C Specs',
    'recursos.tab.tools': 'Tools',
    'recursos.tab.ux': 'UX & Usability',
    'recursos.tab.blogs': 'Publications',

    // Search Dialog
    'search.placeholder': 'Search concepts, tokens, UX laws, or patterns...',
    'search.hint.nav': 'Navigate with ↑ / ↓ • Enter to open',
    'search.hint.esc': 'ESC to close',

    // Side Tracker
    'tracker.aria': 'Quick chapter navigation',
    'tracker.top': 'Back to top',

    // Footer
    'footer.colophon': 'Web design atlas and component design systems',
    'footer.license': 'Inspired by Swiss editorial typography and open web standards.',
  }
};
