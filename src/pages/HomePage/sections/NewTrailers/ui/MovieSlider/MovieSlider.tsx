import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import {trailerType} from "@/pages/HomePage/sections/NewTrailers/ui/NewTrailers.tsx";

import IconPlay from "../assets/play.svg"

type MovieSliderProps = {
    movies: trailerType[];
};

export const MovieSlider = ({movies}: MovieSliderProps) => {
    return (
        <div className="relative overflow-hidden">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                scrollbar={{draggable: true}}
                modules={[Scrollbar]}
                className="mt-4 w-full max-w-[1451px] mx-auto"
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                        <div
                            className="flex justify-center items-center h-[248px] bg-no-repeat bg-cover bg-center rounded-[10px] mb-[8px]"
                            style={{backgroundImage: `url(${movie.posterUrl})`}}
                        >
                            <img width="35px" height="31px" src={IconPlay} alt=""/>
                        </div>
                        {movie.trailer.name}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
