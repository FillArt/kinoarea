import './App.css'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store.ts";
import {initI18n} from "@/shared/i18n";
import {RouterProvider} from "react-router-dom";
import {router} from "@/app/router.tsx";


export const App = () => {
    const [i18nReady, setI18nReady] = useState(false);
    const language = useSelector((state: RootState) => state.App.language);

    useEffect(() => {
        document.body.style.zoom = "0.8"; // 80% zoom
    }, []);

    useEffect(() => {
        const init = async () => {
            await initI18n(language);
            setI18nReady(true);
        };
        init();
    }, [language]);

    if (!i18nReady) {
        return <div>Loading translations...</div>; // Пока i18n не готов, не рендерим остальные компоненты
    }

    return <RouterProvider router={router} />
}

