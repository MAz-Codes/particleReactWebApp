import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "/src/en.json";
import deTranslations from "/src/de.json";
import faTranslations from "/src/fa.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
      fa: { translation: faTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;