import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"; // Автоопределение языка браузера

// Header | Common
import headerEn from "./locales/en/common/header.json"
import headerRu from "./locales/ru/common/header.json";

// Cards | Common
import cardsEn from "./locales/en/common/cards.json"
import cardsRu from "./locales/ru/common/cards.json";

// Footer | Common
import footerEn from "./locales/en/common/footer.json"
import footerRu from "./locales/ru/common/footer.json";

// 404 | Common
import NotFoundEn from "./locales/en/common/404.json"
import NotFoundRu from "./locales/ru/common/404.json";

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

// Expected Products | Home page
import expectedProductsEn from "./locales/en/home/expectedProducts.json"
import expectedProductsRu from "./locales/ru/home/expectedProducts.json";

// Box Office | Home page
import boxOfficeEn from "./locales/en/home/boxOffice.json"
import boxOfficeRu from "./locales/ru/home/boxOffice.json";

// Name | Category
import nameCategoryEn from "./locales/en/category/name.json"
import nameCategoryRu from "./locales/ru/category/name.json"

// Description | Category
import descriptionCategoryEn from "./locales/en/category/description.json"
import descriptionCategoryRu from "./locales/ru/category/description.json"

// Filter | Category
import filterCategoryEn from "./locales/en/category/filter.json"
import filterCategoryRu from "./locales/ru/category/filter.json"


export const initI18n = async (language: string = "en") => {
    await i18n
        //.use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                ru: {
                    // common
                    header: headerRu,
                    cards: cardsRu,
                    footer: footerRu,
                    notFound: NotFoundRu,
                    // home
                    nowInCinema: nowInCinemaRu,
                    newTrailers: newTrailersRu,
                    popularFilms: popularFilmsRu,
                    popularPeople: popularPeopleRu,
                    news: newsRu,
                    expectedProducts: expectedProductsRu,
                    boxOffice: boxOfficeRu,
                    // category
                    nameCategory: nameCategoryRu,
                    descriptionCategory: descriptionCategoryRu,
                    filterCategory: filterCategoryRu
                },
                en: {
                    // common
                    header: headerEn,
                    cards: cardsEn,
                    footer: footerEn,
                    notFound: NotFoundEn,
                    // home
                    nowInCinema: nowInCinemaEn,
                    newTrailers: newTrailersEn,
                    popularFilms: popularFilmsEn,
                    popularPeople: popularPeopleEn,
                    news: newsEn,
                    expectedProducts: expectedProductsEn,
                    boxOffice: boxOfficeEn,
                    //category
                    nameCategory: nameCategoryEn,
                    descriptionCategory: descriptionCategoryEn,
                    filterCategory: filterCategoryEn
                },
            },
            lng: language,
            fallbackLng: "en",
            interpolation: {escapeValue: false},
            debug: false, // Включить логи в консоли
        });
}