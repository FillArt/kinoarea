import {Swiper, SwiperSlide} from "swiper/react";
import {CardMovie} from "@/shared/ui/cards";
import {useCallback, useEffect, useRef, useState} from "react";
import {Navigation} from "swiper/modules";

import Arrow from "../assets/arrow.svg"
import {MovieType} from "@/shared/types/MovieType.ts";

type PopularSliderProps = {
    movies: MovieType[],
    prevButton?: string
    nextButton?: string,
    setIndex?: (index: number) => void,
    release?: boolean
}

export const Slider = ({movies, prevButton, nextButton, setIndex, release = false}: PopularSliderProps ) => {
    const [activeIndex, setActiveIndex] = useState(4);
    const sliderRef = useRef(null);

    useEffect(() => {
        if(setIndex) {
            setIndex(activeIndex)
        }
    }, [activeIndex]);

    const hiddenDefaultControl = prevButton ? 'phone:hidden flex' : 'flex'

    /* TODO - need fixed type Swiper */

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        sliderRef.current.swiper?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <div>
            <Swiper
                ref={sliderRef}
                slidesPerView={2}
                spaceBetween={10}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex + 1)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
                className="mt-4 w-full max-w-[1451px] mx-auto"
                modules={[Navigation]}
                navigation={{
                    prevEl: prevButton ? prevButton : ".custom-prev",
                    nextEl: nextButton? nextButton : ".custom-next",
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
                <button className="custom-prev text-lg"  onClick={handlePrev}>
                    <img src={Arrow} alt=""/>
                </button>
                <span className="text-sm">{activeIndex}/{movies.length}</span>
                <button className="custom-next text-lg rotate-180" onClick={handleNext}>
                    <img src={Arrow} alt=""/>
                </button>
            </div>
        </div>

    );
};