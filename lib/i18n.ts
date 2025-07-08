import { resume as en } from '@/data/en/resume';
import { resume as fr } from '@/data/fr/resume';

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export function loadResume(locale: Locale) {
  return locale === 'fr' ? fr : en;
}
