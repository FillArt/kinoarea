import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {PopularSlider} from "@/pages/home/sections/PopularFilms/ui/PopularSlider/PopularSlider.tsx";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {fetchMovies, MoviesSelector} from "@/pages/home/sections/ExpectedProducts/model/ExpectedProductsSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";

export const ExpectedProducts = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(MoviesSelector)

    useEffect(() => {
        dispatch(fetchMovies())
    }, []);

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                <SectionTitle title="Ожидаемые новинки" line={false}>
                    2/5
                </SectionTitle>

                {movies.length > 0 ? (
                    <div className="tabletLg:m-0 mt-[-35px]">
                        <PopularSlider movies={movies}/>
                    </div>
                ) : (
                    <EmptyCinemaList/>
                )}

            </div>
        </section>
    );
};