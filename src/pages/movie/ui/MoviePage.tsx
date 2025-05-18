import {HomePageLayout} from "@/shared/layouts";
import {Info} from "@/pages/movie/sections/Info";
import {useParams} from "react-router-dom";
import {useGetMovieBackground} from "@/shared/api/movies/hooks/useGetMovieInfo.ts";

export const MoviePage = () => {

    const { id } = useParams();
    const backgroundImage = useGetMovieBackground(Number(id));

    return (
        <HomePageLayout
            imgStatus={true}
            imgPath={`https://image.tmdb.org/t/p/w1280${backgroundImage}`}
            additionalShadow={true}
        >
            <Info />
        </HomePageLayout>
    );
};
