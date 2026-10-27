import { translations, type Language } from './translations';

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  try {
    const stored = localStorage.getItem('atlas_lang');
    if (stored === 'en' || stored === 'es') return stored;
    // Check browser language
    if (navigator.language && navigator.language.startsWith('en')) {
      return 'en';
    }
  } catch (_) {}
  return 'es';
}

export function applyLanguage(lang: Language) {
  if (typeof document === 'undefined') return;

  // Set html lang attribute
  document.documentElement.lang = lang;

  try {
    localStorage.setItem('atlas_lang', lang);
  } catch (_) {}

  // Update pills in language switcher
  const pillEs = document.getElementById('lang-pill-es');
  const pillEn = document.getElementById('lang-pill-en');
  if (pillEs && pillEn) {
    if (lang === 'en') {
      pillEs.classList.remove('is-active');
      pillEn.classList.add('is-active');
    } else {
      pillEs.classList.add('is-active');
      pillEn.classList.remove('is-active');
    }
  }

  // Update all [data-i18n] elements
  const dict = translations[lang] || translations.es;
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key]) {
      // If element contains HTML tags (like &bull; or <b>), update innerHTML, else textContent
      if (dict[key].includes('<') || dict[key].includes('&')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update elements with placeholder translation
  const placeholders = document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]');
  placeholders.forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key && dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update titles/tooltips
  const titles = document.querySelectorAll<HTMLElement>('[data-i18n-title]');
  titles.forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key && dict[key]) {
      el.title = dict[key];
    }
  });
}

export function toggleLanguage(): Language {
  const current = getStoredLanguage();
  const next: Language = current === 'es' ? 'en' : 'es';
  applyLanguage(next);
  return next;
}
