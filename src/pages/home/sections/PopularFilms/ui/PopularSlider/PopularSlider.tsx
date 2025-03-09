import {Swiper, SwiperSlide} from "swiper/react";
import {NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {CardMovie} from "@/shared/ui/cards";
import {useCallback, useRef, useState} from "react";
import {Navigation} from "swiper/modules";

import Arrow from '../PopularSlider/assets/arrow.svg'

type PopularSliderProps = {
    movies: NowInCinemaType[]
}

export const PopularSlider = ({movies}: PopularSliderProps ) => {
    const [activeIndex, setActiveIndex] = useState(4);
    const sliderRef = useRef(null);

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
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
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
                        <CardMovie movie={movie}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className="flex items-center gap-[20px] justify-center">
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