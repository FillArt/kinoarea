import {HomePageLayout} from "@/shared/layouts";
import {Info} from "@/pages/movie/sections/Info";
import {useParams} from "react-router-dom";
import {useGetMovieBackground} from "@/shared/api/movies/hooks/useGetMovieInfo.ts";
import {useEffect} from "react";
import {Actors} from "@/pages/movie/sections/Actors";

export const MoviePage = () => {

    const { id } = useParams();
    const backgroundImage = useGetMovieBackground(Number(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HomePageLayout
            imgStatus={true}
            imgPath={`https://image.tmdb.org/t/p/w1280${backgroundImage}`}
            additionalShadow={true}
        >
            <Info />
            <Actors />
        </HomePageLayout>
    );
};
