import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const defaultLanguage =  import.meta.env.VITE__APP_LANGUAGE || "en"; // Язык по умолчанию

i18n
    .use(LanguageDetector) // Для определения языка пользователя
    .use(initReactI18next) // Интеграция с React
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        fallbackLng: defaultLanguage, // Язык по умолчанию из .env
        interpolation: {
            escapeValue: false, // React уже экранирует строки
        },
    });

export default i18n;