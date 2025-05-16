import {createHashRouter} from "react-router-dom";
import {NotFound} from "@/pages/404";
import {HomePage} from "@/pages/home";
import {CategoryPage} from "@/pages/category";
import {MoviePage} from "@/pages/movie";

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
        path: "movie/:id",
        element: <MoviePage />,
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