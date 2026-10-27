/**
 * Architecture & Domain Type Definitions
 * Atlas de Diseño - Design System & Information Architecture
 */

export type Locale = 'es' | 'en';

export interface NavItem {
  id: string;
  href: string;
  titleKey: string;
  defaultTitle: string;
  icon?: string;
  badge?: string;
}

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

export interface UXLaw {
  id: string;
  name: string;
  principleKey: string;
  descriptionKey: string;
  formula?: string;
  citation: string;
  targetMetric: string;
}

export interface DesignTokenItem {
  name: string;
  category: 'color' | 'spacing' | 'typography' | 'elevation' | 'motion';
  w3cType: string;
  value: string;
  resolvedLight: string;
  resolvedDark: string;
  description: string;
}

export interface ResourceItem {
  title: string;
  url: string;
  description: string;
  tag: 'spec' | 'token' | 'wcag' | 'tool' | 'article';
}

export interface ResourceCategory {
  titleKey: string;
  defaultTitle: string;
  items: ResourceItem[];
}
