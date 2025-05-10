import {createBrowserRouter} from "react-router-dom";
import {NotFound} from "@/pages/404";
import {HomePage} from "@/pages/home";

export const router = createBrowserRouter([
    {
        path: "/kinoarea",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);