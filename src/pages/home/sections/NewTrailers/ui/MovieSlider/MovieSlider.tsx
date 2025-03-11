import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";

import IconPlay from "../assets/play.svg"
import {TrailerType} from "@/shared/types/MovieType.ts";

type MovieSliderProps = {
    movies: TrailerType[];
    onClick: (id: number) => void;
};

export const MovieSlider = ({movies, onClick}: MovieSliderProps) => {
    return (
        <div className="relative overflow-hidden">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                scrollbar={{draggable: true}}
                modules={[Scrollbar]}
                className="mt-4 w-full max-w-[1451px] mx-auto"
                breakpoints={{
                    996: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    566: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
                    >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index} className="cursor-pointer" onClick={() => onClick(movie.id)}>
                        <div
                            className="flex relative group justify-center items-center tabletLg:h-[248px] table:h-[150px] h-[115px] bg-no-repeat bg-cover bg-center rounded-[10px] mb-[10px]"
                            style={{backgroundImage: `url(${movie.posterUrl})`}}
                        >
                            <img  src={IconPlay} className="tabletLg:w-[35px] tabletLg:h-[35px] tablet:w-[20px] tablet:h-[20px] w-[16px] h-[16px] z-10" alt=""/>

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
