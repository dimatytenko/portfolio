import {Locale} from '@/i18n-config';

export enum PATHS {
  HOME = '',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SERVICES = 'services',
  COOKIES = 'info/cookies',
}

export const EXCLUDE_PATHS = [
  PATHS.HOME,
  PATHS.ABOUT,
  PATHS.PROJECTS,
  PATHS.SERVICES,
  PATHS.COOKIES,
] as string[];

export const GET_PATH = {
  home: (lang: Locale) => `/${lang}/${PATHS.HOME}`,
  about: (lang: Locale) => `/${lang}/${PATHS.ABOUT}`,
  projects: (lang: Locale) => `/${lang}/${PATHS.PROJECTS}`,
  services: (lang: Locale) => `/${lang}/${PATHS.SERVICES}`,
};

export enum LINKS {
  GITHUB = 'https://github.com/dimatytenko',
  LINKEDIN = 'https://www.linkedin.com/in/dimatytenko',
  PHONE = '+380666812092',
  EMAIL = 'amgpetronass@gmail.com',
  TELEGRAM = 'https://t.me/dimatytenko',
  CV = 'https://drive.google.com/file/d/1wUIpae-JXEsF-2mR2D-Wahlih-NXdVyG/view?usp=sharing',
  COOKIES = 'https://www.cookiepolicygenerator.com/sample-cookies-policy/',
}

export const GA_MEASUREMENT_ID = 'G-EES3QVT0TF';
