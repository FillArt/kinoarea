import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {fetchMovies, MoviesSelector} from "@/pages/home/sections/ExpectedProducts/model/ExpectedProductsSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {Slider} from "@/widgets/Slider/ui/Slider.tsx";
import Arrow from "@/widgets/Slider/assets/arrow.svg";

export const ExpectedProducts = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(MoviesSelector)

    const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0)

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
                    <div
                        className="flex items-center gap-[20px] justify-center">
                        <button className="expected-prev text-lg" onClick={() => {}}>
                            <img src={Arrow} alt=""/>
                        </button>
                        <span className="text-sm">{currentSliderIndex}/{movies.length}</span>
                        <button className="expected-next text-lg rotate-180" onClick={() => {}}>
                            <img src={Arrow} alt=""/>
                        </button>
                    </div>
                </SectionTitle>

                {movies.length > 0 ? (
                    <div className="tabletLg:m-0 mt-[-35px]">
                        <Slider
                            movies={movies}
                            prevButton=".expected-prev"
                            nextButton=".expected-next"
                            setIndex={setCurrentSliderIndex}
                            release={true}
                        />
                    </div>
                ) : (
                    <EmptyCinemaList/>
                )}

            </div>
        </section>
    );
};