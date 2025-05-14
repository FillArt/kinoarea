import { HomePageLayout } from "@/shared/layouts";
import { useParams } from "react-router-dom";
import { useGenreIdByName } from "@/shared/api/movies/hooks/useGenreIdByName.ts";
import { capitalizeFirstLetter } from "@/shared/helpers/capitalizeFirstLetter.ts";
import { useEffect, useState } from "react";
import { useGetMoviesByGenreIdQuery } from "@/shared/api/movies/movieApi.ts";
import {SectionPagination} from "@/shared/ui/sections/SectionPagination.tsx";

export const CategoryPage = () => {
    const [page, setPage] = useState(1);

    // const navigate = useNavigate();
    const { genre } = useParams();
    const idGenre = useGenreIdByName(capitalizeFirstLetter(genre ?? ""));

    const { data, isLoading, isError } = useGetMoviesByGenreIdQuery(
        { genre_id: idGenre ?? 0, page },
        { skip: !idGenre }
    );

console.log(data, isLoading, isError);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect to 404 if genre is invalid
    // useEffect(() => {
    //     if (genre && !idGenre) {
    //         navigate("/404");
    //     }
    // }, [idGenre, genre, navigate]);

    return (
        <HomePageLayout imgStatus={false}>
            <div className="container max-w-container mx-auto text-white my-10">
                <h1 className="text-2xl mb-4">{capitalizeFirstLetter(genre ?? "")}</h1>
                <p></p>

                {data?.results && data.results.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}

                <SectionPagination currentPage={page} changeNumber={setPage} />

            </div>
        </HomePageLayout>
    );
};
