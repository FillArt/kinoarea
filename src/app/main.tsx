import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "../index.css";
import "react-loading-skeleton/dist/skeleton.css";

import {App} from "./App.tsx";

import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
// import i18n from "@/shared/i18n";


const initApp = async () => {
    // await i18n.init();

    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
};

initApp();
