import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"; // Автоопределение языка браузера

// Header | Common
import headerEn from "./locales/en/common/header.json"
import headerRu from "./locales/ru/common/header.json";

// Now in Cinema | Home Page
import nowInCinemaEn from "./locales/en/home/nowInCinema.json"
import nowInCinemaRu from "./locales/ru/home/nowInCinema.json";

// New Trailers | Home Page
import newTrailersEn from "./locales/en/home/newTrailers.json"
import newTrailersRu from "./locales/ru/home/newTrailers.json";

// Popular Films | Home Page
import popularFilmsEn from "./locales/en/home/popularFilms.json"
import popularFilmsRu from "./locales/ru/home/popularFilms.json";

// Popular People | Home Page
import popularPeopleEn from "./locales/en/home/popularPeople.json"
import popularPeopleRu from "./locales/ru/home/popularPeople.json";

// News | Home page
import newsEn from "./locales/en/home/news.json"
import newsRu from "./locales/ru/home/news.json";


const defaultLanguage = import.meta.env.VITE_APP_LANGUAGE || "en"; // Язык по умолчанию


const initI18n = async () => {
    await i18n
        //.use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                ru: {
                    header: headerRu,
                    nowInCinema: nowInCinemaRu,
                    newTrailers: newTrailersRu,
                    popularFilms: popularFilmsRu,
                    popularPeople: popularPeopleRu,
                    news: newsRu
                },
                en: {
                    header: headerEn,
                    nowInCinema: nowInCinemaEn,
                    newTrailers: newTrailersEn,
                    popularFilms: popularFilmsEn,
                    popularPeople: popularPeopleEn,
                    news: newsEn
                },
            },
            fallbackLng: defaultLanguage,
            interpolation: {escapeValue: false},
            debug: true, // Включить логи в консоли
        });
}

initI18n();



export default i18n;
