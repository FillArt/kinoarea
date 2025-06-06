import {Swiper, SwiperSlide} from "swiper/react";
import {CardMovie} from "@/shared/ui/cards";
import {useCallback, useEffect, useRef, useState} from "react";
import {Navigation} from "swiper/modules";

import Arrow from "../assets/arrow.svg"
import {MovieType} from "@/shared/api/movies/movieType.ts";

type PopularSliderProps = {
    movies: MovieType[],
    prevButton?: string
    nextButton?: string,
    setIndex?: (index: number) => void,
    setBeginStatus?: (status: boolean) => void,
    setEndStatus?: (status: boolean) => void,
    release?: boolean
}

export const Slider = ({
                           movies,
                           prevButton,
                           nextButton,
                           setIndex,
                           setBeginStatus,
                           setEndStatus,
                           release = false
                       }: PopularSliderProps) => {
    const [activeIndex, setActiveIndex] = useState(4);
    const sliderRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (setIndex) {
            setIndex(activeIndex)
        }
    }, [activeIndex]);

    useEffect(() => {
        // @ts-expect-error - it`s normal for Swiper
        if (sliderRef.current?.swiper) {
            // @ts-expect-error - it`s normal for Swiper
            sliderRef.current.swiper.slideTo(0);
            setIsBeginning(true);
            setBeginStatus?.(true)


            setIsEnd(false);
            setEndStatus?.(false)
            setActiveIndex(1);
        }
    }, [movies]);

    const hiddenDefaultControl = prevButton ? 'phone:hidden flex' : 'flex'
    /* TODO - need fixed type Swiper */

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;

        // @ts-expect-error - it`s normal for Swiper
        const swiper = sliderRef.current.swiper;
        swiper.slidePrev();

        setIsBeginning(swiper.isBeginning);
        setBeginStatus?.(swiper.isBeginning)
        setIsEnd(swiper.isEnd);
        setEndStatus?.(swiper.isEnd)
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;

        // @ts-expect-error - it`s normal for Swiper
        const swiper = sliderRef.current.swiper;
        swiper.slideNext();

        setIsBeginning(swiper.isBeginning);
        setBeginStatus?.(swiper.isBeginning)
        setIsEnd(swiper.isEnd);
        setEndStatus?.(swiper.isEnd)

    }, []);


    return (
        <div>
            <Swiper
                ref={sliderRef}
                slidesPerView={2}
                spaceBetween={10}
                onSwiper={(swiper) => {
                    setActiveIndex(swiper.realIndex + 1)
                    setIsBeginning(swiper.isBeginning)
                    setEndStatus?.(swiper.isEnd)
                    setBeginStatus?.(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex + 1)
                    setIsBeginning(swiper.isBeginning)
                    setEndStatus?.(swiper.isEnd)
                    setBeginStatus?.(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }}
                className="mt-4 w-full max-w-[1451px] mx-auto"
                modules={[Navigation]}
                navigation={{
                    prevEl: prevButton ? prevButton : ".custom-prev",
                    nextEl: nextButton ? nextButton : ".custom-next",
                }}
                breakpoints={{
                    996: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        slidesPerGroup: 2
                    },
                    566: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <CardMovie movie={movie} release_date={release ? movie.release_date : null}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className={` ${hiddenDefaultControl} items-center gap-[20px] justify-center`}>
                <button
                    className={` ${isBeginning ? "cursor-not-allowed" : "pointer"} custom-prev text-lg`}
                    onClick={!isBeginning ? handlePrev : undefined}>

                    <img className={`${isBeginning ? "opacity-20" : "opacity-100"}`} src={Arrow} alt=""/>

                </button>
                <span className="text-sm">{activeIndex}/{movies.length}</span>
                <button className={`${isEnd ? "cursor-not-allowed" : "pointer"} custom-next text-lg rotate-180`}
                        onClick={!isEnd ? handleNext : undefined}>
                    <img className={`${isEnd ? "opacity-20" : "opacity-100"}`} src={Arrow} alt=""/>
                </button>
            </div>
        </div>

    );
};