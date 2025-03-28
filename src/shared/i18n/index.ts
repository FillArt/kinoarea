import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"; // Автоопределение языка браузера

// Now in Cinema
import nowInCinemaEn from "./locales/en/nowInCinema.json"
import nowInCinemaRu from "./locales/ru/nowInCinema.json";

// New Trailers
import newTrailersEn from "./locales/en/newTrailers.json"
import newTrailersRu from "./locales/ru/newTrailers.json";

// Popular Films
import popularFilmsEn from "./locales/en/popularFilms.json"
import popularFilmsRu from "./locales/ru/popularFilms.json";


const defaultLanguage = import.meta.env.VITE_APP_LANGUAGE || "en"; // Язык по умолчанию

await i18n
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                nowInCinema: nowInCinemaRu,
                newTrailers: newTrailersRu,
                popularFilms: popularFilmsRu,
            },
            en: {
                nowInCinema: nowInCinemaEn,
                newTrailers: newTrailersEn,
                popularFilms: popularFilmsEn,
            },
        },
        fallbackLng: defaultLanguage,
        interpolation: {escapeValue: false},
        debug: true, // Включить логи в консоли
    });

export default i18n;
