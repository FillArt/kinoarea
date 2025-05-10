import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "../index.css";
import "react-loading-skeleton/dist/skeleton.css";

import {App} from "./App.tsx";

import {Provider} from "react-redux";
import {store} from "@/app/store.ts";


const initApp = async () => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
};

initApp();
