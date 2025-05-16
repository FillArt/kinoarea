import {HomePageLayout} from "@/shared/layouts";
import {Info} from "@/pages/movie/sections/Info";
import {useParams} from "react-router-dom";
import {useGetMovieInfoQuery} from "@/shared/api/movies/movieApi.ts";

export const MoviePage = () => {

    const { id } = useParams();
    const { data: movieInfo, isLoading, error } = useGetMovieInfoQuery(Number(id));

    if (isLoading || !movieInfo) {
        return <div className="text-white text-center mt-10">Loading...</div>; // или скелетон
    }

    if (error) {
        return <div className="text-red-500 text-center mt-10">Error loading movie</div>;
    }

    return (
        <HomePageLayout
            imgStatus={true}
            imgPath={`https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}`}
            additionalShadow={true}
        >
            <Info />
        </HomePageLayout>
    );
};
