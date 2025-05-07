import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useEffect, useState} from "react";
import {Slider} from "@/widgets/Slider/ui/Slider.tsx";
import Arrow from "@/widgets/Slider/assets/arrow.svg";
import {useTranslation} from "react-i18next";
import {Section} from "@/shared/ui/sections/Section.tsx";
import {CinemaListSkeleton} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaListSkeleton.tsx";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {useGetUpcomingMovieQuery} from "@/shared/api/movies/movieApi.ts";

export const ExpectedProducts = () => {

    const {t} = useTranslation('expectedProducts')

    const breakpoint = useBreakpoint()
    const [numberOfFilms, setNumberOfFilms] = useState<number>(4)

    const {data: movies, isLoading} = useGetUpcomingMovieQuery()

    const [isBeginningExpected, setIsBeginningExpected] = useState(true);
    const [isEndExpected, setIsEndExpected] = useState(false);

    const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0)


    useEffect(() => {
        if (breakpoint === "desktop") setNumberOfFilms(4)
        else if (breakpoint === "phone") setNumberOfFilms(2)
        else if (breakpoint === "tablet") setNumberOfFilms(3)
    }, [breakpoint]);

    // @ts-ignore
    // @ts-ignore
    return (
        <Section>
            <SectionTitle title={t('title')} line={false} sectionVersion="two">
                {!isLoading && (
                    <div className="phone:flex hidden items-center gap-[20px] justify-center">
                        <button
                            className={` ${isBeginningExpected ? "cursor-not-allowed" : "pointer"} expected-prev text-lg`}>
                            <img className={`${isBeginningExpected ? "opacity-20" : "opacity-100"}`} src={Arrow}
                                 alt=""/>
                        </button>

                        <span className="text-sm">{currentSliderIndex}/{movies?.length}</span>

                        <button
                            className={`${isEndExpected ? "cursor-not-allowed" : "pointer"} expected-next text-lg rotate-180`}>
                            <img className={`${isEndExpected ? "opacity-20" : "opacity-100"}`} src={Arrow} alt=""/>
                        </button>
                    </div>
                )}
            </SectionTitle>

            {isLoading ? (
                <div className="tabletLg:m-0 mt-[-35px]">
                    {movies && movies.length > 0 ? (
                        <Slider
                            movies={movies}
                            prevButton=".expected-prev"
                            nextButton=".expected-next"
                            setIndex={setCurrentSliderIndex}
                            setBeginStatus={setIsBeginningExpected}
                            setEndStatus={setIsEndExpected}
                            release={true}
                        />
                    ) : (
                        <EmptyCinemaList />
                    )}
                </div>
            ) : (
                <CinemaListSkeleton numberOfFilms={numberOfFilms}/>
            )}


        </Section>
    );
};