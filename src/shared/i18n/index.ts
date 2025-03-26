import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"; // Автоопределение языка браузера

import nowInCinemaEn from "./locales/en/nowInCinema.json"
import nowInCinemaRu from "./locales/ru/nowInCinema.json";


const defaultLanguage = import.meta.env.VITE_APP_LANGUAGE || "en"; // Язык по умолчанию

await i18n
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                nowInCinema: nowInCinemaRu
            },
            en: {
                nowInCinema: nowInCinemaEn,
            },
        },
        fallbackLng: defaultLanguage,
        interpolation: {escapeValue: false},
        debug: true, // Включить логи в консоли
    });

export default i18n;
