import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/en/translation.json";
import translationEsp from "./locales/es/translation.json";
import CONSTANTS from "../config/constants";

const env = process.env.REACT_APP_ENV as string;
const includedEnv = CONSTANTS.INCLUDED_INTL_LOG_ENVS.includes(env);

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: includedEnv,
    lng: "en",
    fallbackLng: "es", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEng
      },
      es: {
        translations: translationEsp
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;
