import {Locale} from '@/i18n-config';

export const getPath = {
  home: (lang: Locale) => `/${lang}/`,
  about: (lang: Locale) => `/${lang}/about`,
  projects: (lang: Locale) => `/${lang}/projects`,
  services: (lang: Locale) => `/${lang}/services`,
};

export enum LINKS {
  GITHUB = 'https://github.com/dimatytenko',
  LINKEDIN = 'https://www.linkedin.com/in/dima-tytenko-a5b26a21b/',
  PHONE = '+380666812092',
  EMAIL = 'amgpetronass@gmail.com',
  TELEGRAM = 'https://t.me/dimatytenko',
  CV = 'https://drive.google.com/file/d/1-bhPHtrqXvLJ1E9UP6maCLLe_VLDWUnr/view?usp=drive_link',
}
