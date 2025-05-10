import {createHashRouter} from "react-router-dom";
import {NotFound} from "@/pages/404";
import {HomePage} from "@/pages/home";

export const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);