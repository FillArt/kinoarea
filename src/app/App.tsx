import './App.css'
import {HomePage} from "@/pages/home";
import {useEffect} from "react";

export const App = () => {
    useEffect(() => {
        document.body.style.zoom = "0.8"; // 80% zoom
    }, []);

    return (
        <>
            <HomePage />

        </>
    )
}

