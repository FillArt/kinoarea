import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";

import IconPlay from "@/widgets/YoutubePlayer/assets/play.svg"
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {newTrailersSelector} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {truncateString} from "@/shared/helpers/truncateString.ts";

type MovieSliderProps = {
    onClick: (id: number) => void;
};

export const MovieSlider = ({onClick}: MovieSliderProps) => {

    const movies = useAppSelector(newTrailersSelector)

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
                                className="absolute inset-0 bg-formElementColor bg-opacity-0 group-hover:bg-opacity-65
                    flex items-center justify-center rounded-[10px] transition-all duration-300 ease-in-out">
                            </div>
                        </div>

                        <div>
                            <h5 className="tabletLg:text-[20px] text-[15px]">{truncateString(movie.trailer.name, 70)}</h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
