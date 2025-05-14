import {HomePageLayout} from "@/shared/layouts";
import {useParams} from "react-router-dom";
import {useGenreIdByName} from "@/shared/api/movies/hooks/useGenreIdByName.ts";
import {useEffect, useState} from "react";
import {useGetMoviesByGenreIdQuery} from "@/shared/api/movies/movieApi.ts";
import {SectionPagination} from "@/shared/ui/sections/SectionPagination.tsx";
import {CategoryTitle} from "@/pages/category/section/CategoryTitle";
import {CategoryContent} from "@/pages/category/section/CategoryContent";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useMoviesWithGenres} from "@/shared/api/movies/hooks/useMoviesWithGenres.ts";
import {useTranslation} from "react-i18next";

export const CategoryPage = () => {
    const [page, setPage] = useState(1);
    const {t} = useTranslation('nameCategory');

    const [style, setStyle] = useState<'col' | 'row'>('col')

    // const navigate = useNavigate();

    const { genre } = useParams();
    const idGenre = useGenreIdByName(t(`${genre}`) ?? "");

    const { data, isError } = useGetMoviesByGenreIdQuery(
        { genre_id: idGenre ?? 0, page },
        { skip: !idGenre }
    );

    const { movies } = useMoviesWithGenres({movies: data?.results ?? []});

console.log(data, isError);

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
            <div className="container max-w-container mx-auto text-white phone:my-10 mt-[23px] mb-[32px]">
                <CategoryTitle genre={genre!}
                               setPage={setPage}
                               setStyle={setStyle}
                               style={style} />

                {movies && movies.length > 0 ? (
                    <CategoryContent movies={movies} style={style} />
                ) : (
                    <EmptyCinemaList />
                )}

                {movies && movies.length > 0 && (
                    <SectionPagination currentPage={page} changeNumber={setPage} />
                )}
            </div>
        </HomePageLayout>
    );
};
