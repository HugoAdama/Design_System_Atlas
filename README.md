# Design System Atlas

> *The invisible architecture of every screen.*

An editorial living reference guide to design systems, information architecture, modern frontend patterns, and interface craft. Built with [Astro](https://astro.build).

🌐 **Live Demo:** [https://hugoadama.github.io/Design_System_Atlas/](https://hugoadama.github.io/Design_System_Atlas/)

---

## Content & Features

- **Fundamentos (Design Systems):**
  - W3C Design Tokens Community Group (DTCG) specification taxonomy (Global, Semantic, Component).
  - Interactive Design Tokens Playground 2.0 (accent color, border radius, spacing, shadows, and typography with one-click CSS variable copying).
  - 6-state component matrix (`default`, `:hover`, `:active`, `:focus-visible`, `:disabled`, `loading`).
  - WCAG 2.2 / APCA contrast auditing (4.5:1, 3:1, 7:1 ratios).
  - Atomic Design and Governance / DesignOps architecture diagrams.

- **Información y UX:**
  - Cognitive UX laws (Hick's Law, Fitts's Law, Miller's 7±2 Law, Jakob's Law).
  - Navigation anatomy & layout patterns (Header, Persistent Sidebar, Mobile Bottom Bar, Command Palette).
  - Purposeful screen states (Empty states, Skeleton screens, input validation).

- **Frontend y Patrones Técnicos:**
  - Modern CSS (2025–2026): `@container` queries, relational `:has()` selector, View Transitions API, `color-mix()`, and `@layer`.
  - Core Web Vitals for UI designers (INP, LCP, CLS).
  - Astro Island architecture (`client:visible`).

- **Tendencias Visuales:**
  - Neobrutalism, Bento Grid, Glassmorphism / Spatial UI, Kinetic Variable Typography, and Spring physics micro-interactions.

- **Directorio de Recursos:**
  - Categorized directory filtering with links to official W3C standards, component libraries, and testing tools.

- **Global Navigation & Accessibility:**
  - Live Quick Search dialog (`Ctrl + K` or `/`).
  - Real-time reading progress bar.
  - Light / Dark theme persistence.
  - 100% SVG iconography (zero emojis).

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build
```

---

## License

MIT
