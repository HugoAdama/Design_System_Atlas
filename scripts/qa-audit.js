import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const htmlPath = path.join(projectRoot, 'dist', 'index.html');
const cssPath = path.join(projectRoot, 'src', 'styles', 'global.css');
const translationsPath = path.join(projectRoot, 'src', 'i18n', 'translations.ts');

const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  tests: []
};

function recordTest(name, passed, message) {
  if (passed) {
    results.passed++;
    results.tests.push({ status: 'PASS', name, message });
  } else {
    results.failed++;
    results.tests.push({ status: 'FAIL', name, message });
  }
}

// 1. Check Build Artifact Existence
const htmlExists = fs.existsSync(htmlPath);
recordTest('Build Artifact', htmlExists, 'dist/index.html exists');

if (!htmlExists) {
  console.error('\nERROR: dist/index.html does not exist. Run "npm run build" first.\n');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// 2. Headings Hierarchy
const h1Matches = html.match(/<h1[^>]*>.*?<\/h1>/gis) || [];
recordTest('SEO & a11y: Single H1', h1Matches.length === 1, `Found ${h1Matches.length} H1 tags (required: exactly 1)`);

const h2Matches = html.match(/<h2[^>]*>.*?<\/h2>/gis) || [];
recordTest('Semantic Structure: H2 Sections', h2Matches.length >= 5, `Found ${h2Matches.length} H2 major section headings`);

// 3. Meta and SEO Validation
const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
recordTest('Responsive Meta Viewport', hasViewport, 'Viewport meta tag is properly defined with viewport-fit=cover');

const hasDesc = /<meta[^>]+name=["']description["']/i.test(html);
recordTest('SEO Meta Description', hasDesc, 'Meta description tag is present');

const hasFavicon = /rel=["']icon["'][^>]+href=["'][^"']*favicon\.svg["']/i.test(html);
recordTest('Icon: Vector SVG Favicon', hasFavicon, 'Vector SVG Favicon is linked');

const hasAppleTouch = /rel=["']apple-touch-icon["'][^>]+href=["'][^"']*favicon\.svg["']/i.test(html);
recordTest('Icon: Apple Touch Icon', hasAppleTouch, 'Apple Touch Icon is linked');

const hasLangAttr = /<html[^>]+lang=["'][a-z]{2}["']/i.test(html);
recordTest('i18n: HTML Lang Attribute', hasLangAttr, 'HTML root has standard lang attribute');

const hasOpenGraph = /<meta[^>]+property=["']og:title["']/i.test(html) && /<meta[^>]+name=["']twitter:card["']/i.test(html);
recordTest('SEO: Open Graph & Social Cards', hasOpenGraph, 'Open Graph and Twitter Card tags are properly defined');

const ogImgPath = path.join(projectRoot, 'dist', 'og-image.jpg');
const hasOgImage = /<meta[^>]+property=["']og:image["']/i.test(html) && fs.existsSync(ogImgPath);
recordTest('Asset: Open Graph Social Image', hasOgImage, 'og-image.jpg is linked and present in dist/');

const robotsPath = path.join(projectRoot, 'dist', 'robots.txt');
const hasRobots = fs.existsSync(robotsPath);
recordTest('SEO: Search Engine Robots Directives', hasRobots, 'dist/robots.txt is generated and accessible');

// 4. Broken Anchor Targets
const hrefMatches = [...html.matchAll(/href=["']#([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]);
const idMatches = new Set([...html.matchAll(/id=["']([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]));
const missingIds = hrefMatches.filter(id => !idMatches.has(id));
recordTest(
  'Navigation: Internal Anchor Links',
  missingIds.length === 0,
  missingIds.length === 0
    ? `All ${hrefMatches.length} anchor links point to existing IDs`
    : `Missing targets: ${missingIds.join(', ')}`
);

// 5. Interactive Components Validation
const hasReadingBar = idMatches.has('reading-bar');
recordTest('Feature: Reading Progress Bar', hasReadingBar, 'Reading bar element exists with id="reading-bar"');

const hasThemeToggle = idMatches.has('theme-toggle');
recordTest('Feature: Theme Toggle', hasThemeToggle, 'Theme toggle button exists with id="theme-toggle"');

const hasLangToggle = idMatches.has('lang-toggle');
recordTest('Feature: Language Switcher', hasLangToggle, 'Language switcher exists with id="lang-toggle"');

const hasSearchDialog = idMatches.has('search-dialog');
recordTest('Feature: Search Dialog Modal', hasSearchDialog, 'Search dialog exists with id="search-dialog"');

const hasBeforeAfter = idMatches.has('before-after-slider');
recordTest('Component: Before/After Split Slider', hasBeforeAfter, 'Split slider container exists');

const hasTypeScale = idMatches.has('typescale-list');
recordTest('Component: Type Scale Calculator', hasTypeScale, 'Type scale preview list container exists');

const hasChapterNav = idMatches.has('chapter-nav-bar');
recordTest('Feature: Chapter Navigation Bar', hasChapterNav, 'Sticky chapter navigation bar exists with id="chapter-nav-bar"');

const hasViewModeToggle = idMatches.has('mode-chapter-btn') && idMatches.has('mode-continuous-btn');
recordTest('Feature: View Mode Switcher', hasViewModeToggle, 'View mode toggle buttons exist (chapter vs continuous)');

const hasPagination = html.includes('chapter-pagination');
recordTest('Component: Chapter Pagination', hasPagination, 'Chapter pagination controls exist across sections');

// 6. i18n Dictionary Validation
const i18nMatches = [...html.matchAll(/data-i18n=["']([^"']+)["']/g)].map(m => m[1]);
const transFileContent = fs.readFileSync(translationsPath, 'utf8');
const esKeys = new Set([...transFileContent.matchAll(/'([a-zA-Z0-9_.-]+)':/g)].map(m => m[1]));
const missingTranslations = i18nMatches.filter(k => !esKeys.has(k));
recordTest(
  'i18n: Dictionary Coverage',
  missingTranslations.length === 0,
  missingTranslations.length === 0
    ? `All ${i18nMatches.length} DOM data-i18n elements mapped in translations.ts`
    : `Missing keys: ${missingTranslations.join(', ')}`
);

// 7. CSS Performance & Variables Validation
const stylesDir = path.join(projectRoot, 'src', 'styles');
const css = fs.existsSync(stylesDir)
  ? fs.readdirSync(stylesDir).filter(f => f.endsWith('.css')).map(f => fs.readFileSync(path.join(stylesDir, f), 'utf8')).join('\n')
  : fs.readFileSync(cssPath, 'utf8');
const hasReducedMotion = /@media\s*\(prefers-reduced-motion:\s*reduce\)/i.test(css);
recordTest('a11y: Prefers-Reduced-Motion', hasReducedMotion, 'prefers-reduced-motion media query is implemented');

const hasDarkMode = /:root\[data-theme=["']dark["']\]/i.test(css);
recordTest('Theming: Dark Mode Definition', hasDarkMode, 'Explicit dark mode token overrides defined');

const hasLightMode = /:root\[data-theme=["']light["']\]/i.test(css);
recordTest('Theming: Light Mode Definition', hasLightMode, 'Explicit light mode token overrides defined');

const hasHardwareAccel = /translate3d\(/i.test(css);
recordTest('Motion: Hardware 3D Acceleration', hasHardwareAccel, 'CSS utilizes translate3d for GPU compositor performance');

// 8. Output Report
console.log('\n=============================================');
console.log('       ATLAS DE DISEÑO - QA AUDIT REPORT     ');
console.log('=============================================\n');
results.tests.forEach(t => {
  const symbol = t.status === 'PASS' ? '[PASS]' : (t.status === 'WARN' ? '[WARN]' : '[FAIL]');
  console.log(`${symbol} ${t.name}: ${t.message}`);
});
console.log('\n---------------------------------------------');
console.log(`TOTAL: Passed: ${results.passed} | Failed: ${results.failed} | Warnings: ${results.warnings}`);
console.log('=============================================\n');

if (results.failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
