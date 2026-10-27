# Internacionalizacion (i18n)

Este documento detalla la arquitectura, el flujo de ejecucion y las pautas para mantener el sistema de traduccion bilingue (Espanol e Ingles) en Atlas de Diseno.

---

## 1. Enfoque Arquitectonico: Reactividad en Cliente

Dado que el proyecto utiliza una ruta base (`base: '/Design_System_Atlas'`) alojada en GitHub Pages, una arquitectura clasica basada en rutas de subcarpetas (`/es/` y `/en/`) generaria redirecciones complejas y perdida de posicion durante la lectura.

Por ello, se implemento un motor de internacionalizacion en el cliente con las siguientes ventajas:
1. Sin recarga de pagina: El cambio de idioma se efectua instantaneamente modificando el arbol DOM, preservando intacta la posicion de lectura del usuario.
2. Sin duplicacion de plantillas: Los componentes HTML se definen una sola vez y se anotan con atributos semanticos.
3. Persistencia transparente: El idioma seleccionado se guarda en `localStorage` bajo la clave `atlas_lang`.

---

## 2. Estructura de Archivos del Sistema i18n

El modulo se ubica en `src/i18n/` y contiene dos archivos principales:

```
src/i18n/
|-- translations.ts     Diccionario maestro fuertemente tipado
`-- client.ts           Motor de aplicacion, conmutacion y persistencia
```

### Diccionario Maestro (`src/i18n/translations.ts`)
Define el tipo de idioma y las traducciones organizadas por claves con nomenclatura por puntos:

```typescript
export type Language = 'es' | 'en';
export type TranslationKey = keyof typeof translations['es'];

export const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.fundamentos': 'Fundamentos',
    'nav.mode.chapters': 'Por Capitulos',
    // ...
  },
  en: {
    'nav.fundamentos': 'Fundamentals',
    'nav.mode.chapters': 'By Chapters',
    // ...
  }
};
```

---

## 3. Atributos de Enlace en el DOM

Para marcar los elementos que deben traducirse dinamicamente, se utilizan los siguientes atributos de datos en el marcado Astro o HTML:

1. `data-i18n="clave"`:
   Reemplaza el texto interno (`textContent`) del elemento.
   Ejemplo:
   ```html
   <h2 data-i18n="fundamentos.title">Fundamentos de un sistema de diseno</h2>
   ```

2. `data-i18n-placeholder="clave"`:
   Reemplaza el atributo `placeholder` de campos de entrada (`input`, `textarea`).
   Ejemplo:
   ```html
   <input type="search" data-i18n-placeholder="search.placeholder" />
   ```

3. `data-i18n-title="clave"`:
   Reemplaza el atributo `title` utilizado para descripciones emergentes o botones accesibles.
   Ejemplo:
   ```html
   <button type="button" data-i18n-title="tracker.top"></button>
   ```

---

## 4. API del Cliente (`src/i18n/client.ts`)

- `getStoredLanguage()`:
  Retorna el idioma guardado en `localStorage` o el idioma del navegador si es la primera visita (`es` si contiene `es`, `en` en caso contrario).
- `applyLanguage(lang: Language)`:
  Recorre todos los elementos que posean `data-i18n`, `data-i18n-placeholder` o `data-i18n-title`, actualizando sus valores de acuerdo con el diccionario. Actualiza tambien la etiqueta `<html lang="...">` y los indicadores visuales del boton selector.
- `toggleLanguage()`:
  Alterna entre `es` y `en`, guarda la eleccion en `localStorage` y llama a `applyLanguage`.

---

## 5. Prevencion de FOUC de Idioma

Para evitar que la pagina parpadee mostrando textos en espanol y luego cambiando a ingles durante la carga inicial, `src/layouts/Layout.astro` incluye un script inline en el `<head>` que ejecuta una evaluacion temprana antes del primer renderizado:

```html
<script is:inline>
  (function () {
    var savedLang = localStorage.getItem('atlas_lang');
    if (!savedLang) {
      savedLang = navigator.language.startsWith('es') ? 'es' : 'en';
    }
    document.documentElement.lang = savedLang;
  })();
</script>
```
