/**
 * File that dictates the behaviour of i18n (translations)
 */
import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // This will load the translations from public
  .use(LanguageDetector) // Used to detect user language
  .use(initReactI18next)
  .init({
    //Config options
    //Add the default language
    lng: "es",
    //Fallback language in case something goes wrong
    fallbackLng: "en",
    debug: true,
    //escapeValue is not necessary as react does it by itself
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
