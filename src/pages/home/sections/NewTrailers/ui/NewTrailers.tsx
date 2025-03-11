import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect, useState} from "react";

import ArrowIcon from '../assets/arrow.svg'
import {MainPreview} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPreview.tsx";
import {MovieSlider} from "@/pages/home/sections/NewTrailers/ui/MovieSlider/MovieSlider.tsx";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {nowMoviesSelector} from "@/pages/home/sections/NowInCinema/model/NowInCinemaSlice.ts";
import {
    changeMovieInMain,
    fetchAllMovieTrailers,
    newTrailersSelector
} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";


export const NewTrailers = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(nowMoviesSelector)
    const trailers = useAppSelector(newTrailersSelector)

    const [isVideoMode, setIsVideoMode] = useState(false)

    useEffect(() => {
        if(movies.length) {
            dispatch(fetchAllMovieTrailers(movies));
        }
    }, [movies]);

    const chooseNextMovie = (idMovie: number) => {
        dispatch(changeMovieInMain({idMovie}))
        setIsVideoMode(false)
    }

    return (
        <section className="bg-backgroundColor text-white pt-6 mb-10 font-main ">
            <div className="container max-w-container mx-auto">
                <SectionTitle line={false} title="Новые трейлеры" sectionVersion="two">
                    <a className="tabletLg:text-[22px] text-[18px] flex items-center" href="/">
                        Все трейлеры
                        <img src={ArrowIcon} alt="Стрелка" className="tabletLg:ml-[27px] ml-[14px] w-6 h-6"/>
                    </a>
                </SectionTitle>

                <div className="phone:mt-[32px] mt-[18px] grid">
                    <MainPreview videoMod={isVideoMode} setVideoMod={setIsVideoMode}/>
                    <MovieSlider onClick={chooseNextMovie} movies={trailers}/>
                </div>

            </div>
        </section>
    );
};