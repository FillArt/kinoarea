import {createHashRouter} from "react-router-dom";
import {NotFound} from "@/pages/404";
import {HomePage} from "@/pages/home";
import {CategoryPage} from "@/pages/category";

export const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "category/:genre",
        element: <CategoryPage />,
    },
    {
        path: "/404",
        element: <NotFound />
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);