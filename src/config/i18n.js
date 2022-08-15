import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import languages from './languages';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: languages.map(l => l.code),

    fallbackLng: "en",

    detection: {
      order: ['querystring', 'path', 'cookie', 'localStorage', 'navigator', 'subdomain'],

      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      caches: ['cookie'],

      htmlTag: document.documentElement
    },

    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

export default i18n;
