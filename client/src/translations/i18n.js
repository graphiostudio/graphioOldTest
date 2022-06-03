import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_TH } from "./th/translations";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // lng: "en",
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      th: {
        translation: TRANSLATIONS_TH,
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
