import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"; // Автоопределение языка браузера

// Now in Cinema
import nowInCinemaEn from "./locales/en/home/nowInCinema.json"
import nowInCinemaRu from "./locales/ru/home/nowInCinema.json";

// New Trailers
import newTrailersEn from "./locales/en/home/newTrailers.json"
import newTrailersRu from "./locales/ru/home/newTrailers.json";

// Popular Films
import popularFilmsEn from "./locales/en/home/popularFilms.json"
import popularFilmsRu from "./locales/ru/home/popularFilms.json";

// Popular People
import popularPeopleEn from "./locales/en/home/popularPeople.json"
import popularPeopleRu from "./locales/ru/home/popularPeople.json";


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
                popularPeople: popularPeopleRu,
            },
            en: {
                nowInCinema: nowInCinemaEn,
                newTrailers: newTrailersEn,
                popularFilms: popularFilmsEn,
                popularPeople: popularPeopleEn,
            },
        },
        fallbackLng: defaultLanguage,
        interpolation: {escapeValue: false},
        debug: true, // Включить логи в консоли
    });

export default i18n;
