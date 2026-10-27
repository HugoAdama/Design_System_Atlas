import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    id: 'fundamentos',
    href: '#fundamentos',
    titleKey: 'nav.fundamentos',
    defaultTitle: 'Fundamentos',
    badge: '01'
  },
  {
    id: 'ux',
    href: '#ux',
    titleKey: 'nav.ux',
    defaultTitle: 'Arquitectura & UX',
    badge: '02'
  },
  {
    id: 'frontend',
    href: '#frontend',
    titleKey: 'nav.frontend',
    defaultTitle: 'Frontend & CSS',
    badge: '03'
  },
  {
    id: 'tendencias',
    href: '#tendencias',
    titleKey: 'nav.tendencias',
    defaultTitle: 'Tendencias UI',
    badge: '04'
  },
  {
    id: 'recursos',
    href: '#recursos',
    titleKey: 'nav.recursos',
    defaultTitle: 'Recursos & Docs',
    badge: '05'
  }
];
