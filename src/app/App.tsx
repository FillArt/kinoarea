import './App.css'
import {HomePage} from "@/pages/home";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store.ts";
import {initI18n} from "@/shared/i18n";


export const App = () => {
    useEffect(() => {
        document.body.style.zoom = "0.8"; // 80% zoom
    }, []);

    const language = useSelector((state: RootState) => state.App.language);

    useEffect(() => {
        initI18n(language);
    }, [language]);

    return (
        <>
            <HomePage />
        </>
    )
}

