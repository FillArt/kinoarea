import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {fetchMovies, MoviesSelector} from "@/pages/home/sections/ExpectedProducts/model/ExpectedProductsSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {Slider} from "@/widgets/Slider/ui/Slider.tsx";
import Arrow from "@/widgets/Slider/assets/arrow.svg";
import {useTranslation} from "react-i18next";
import {Section} from "@/shared/ui/sections/Section.tsx";

export const ExpectedProducts = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(MoviesSelector)
    const {t} = useTranslation('expectedProducts')

    const [isBeginningExpected, setIsBeginningExpected] = useState(true);
    const [isEndExpected, setIsEndExpected] = useState(false);

    const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0)

    useEffect(() => {
        dispatch(fetchMovies())
    }, []);


    return (
        <Section>
            <SectionTitle title={t('title')} line={false} sectionVersion="two">
                <div
                    className="phone:flex hidden items-center gap-[20px] justify-center">

                    <button
                        className={` ${isBeginningExpected ? "cursor-not-allowed" : "pointer"} expected-prev text-lg`}>

                        <img className={`${isBeginningExpected ? "opacity-20" : "opacity-100"}`} src={Arrow} alt=""/>

                    </button>

                    <span className="text-sm">{currentSliderIndex}/{movies.length}</span>

                    <button className={`${isEndExpected ? "cursor-not-allowed" : "pointer"} expected-next text-lg rotate-180`}>
                        <img className={`${isEndExpected ? "opacity-20" : "opacity-100"}`} src={Arrow} alt=""/>
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
                        setBeginStatus={setIsBeginningExpected}
                        setEndStatus={setIsEndExpected}
                        release={true}
                    />
                </div>
            ) : (
                <EmptyCinemaList/>
            )}

        </Section>
    );
};