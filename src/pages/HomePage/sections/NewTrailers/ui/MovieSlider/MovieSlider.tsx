import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import {trailerType} from "@/pages/HomePage/sections/NewTrailers/ui/NewTrailers.tsx";

import IconPlay from "../assets/play.svg"

type MovieSliderProps = {
    movies: trailerType[];
    onClick: (id: number) => void;
};

export const MovieSlider = ({movies, onClick}: MovieSliderProps) => {
    return (
        <div className="relative overflow-hidden">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                scrollbar={{draggable: true}}
                modules={[Scrollbar]}
                className="mt-4 w-full max-w-[1451px] mx-auto"
                breakpoints={{
                    996: {
                        slidesPerView: 4,
                    }
                }}
                    >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index} className="cursor-pointer" onClick={() => onClick(movie.id)}>
                        <div
                            className="flex relative group justify-center items-center tabletLg:h-[248px] h-[150px] bg-no-repeat bg-cover bg-center rounded-[10px] mb-[10px]"
                            style={{backgroundImage: `url(${movie.posterUrl})`}}
                        >
                            <img width="35px" height="31px" src={IconPlay} className="z-10" alt=""/>

                            <div
                                className="absolute w-full h-full duration-300 bg-formElementColor bg-opacity-65 hidden group-hover:flex items-center justify-center rounded-[10px]">
                            </div>
                        </div>

                        <div>
                            <h5 className="tabletLg:text-[20px] text-[15px]">{movie.trailer.name}</h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
