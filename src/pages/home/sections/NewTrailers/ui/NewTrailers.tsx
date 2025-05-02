import {useNowPlayingWithGenres} from "@/shared/api/movies/hooks/useNowPlayingWithGenres.ts";


import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect, useState} from "react";

import ArrowIcon from '../assets/arrow.svg'
import {MainPreview} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPreview.tsx";
import {MovieSlider} from "@/pages/home/sections/NewTrailers/ui/MovieSlider/MovieSlider.tsx";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {changeMovieInMainAC, initAllTrailersAC} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {useTranslation} from "react-i18next";
import {Section} from "@/shared/ui/sections/Section.tsx";
import {useGetMultipleTrailersQuery} from "@/shared/api/movies/movieApi.ts";


export const NewTrailers = () => {
    const {t} = useTranslation("newTrailers")
    const [isVideoMode, setIsVideoMode] = useState(false)
    const dispatch = useAppDispatch();

    const { movies } = useNowPlayingWithGenres();
    const movieIds = movies.map(m => m.id!);
    const { data: trailers, isLoading } = useGetMultipleTrailersQuery(movieIds);


    useEffect(() => {
        if(trailers !== undefined) {
            dispatch(initAllTrailersAC({trailers: trailers}));
        }
    }, [trailers]);

    const chooseNextMovie = (idMovie: number) => {
        dispatch(changeMovieInMainAC({idMovie}))
        setIsVideoMode(false)
    }

    return (
        <Section>
            <SectionTitle line={false} title={t('title')} sectionVersion="two">
                <a className="group  hover:text-[#3657CB] tabletLg:text-[22px] text-[18px] flex items-center" href="/">
                    {t('button_title')}
                    <img src={ArrowIcon} alt="Стрелка" className="group-hover:animate-bounce-x tabletLg:ml-[27px] ml-[14px] w-6 h-6"/>
                </a>
            </SectionTitle>

            <div className="phone:mt-[32px] mt-[18px] grid">
                <MainPreview videoMod={isVideoMode} setVideoMod={setIsVideoMode} isLoading={isLoading} />
                <MovieSlider onClick={chooseNextMovie}/>
            </div>
        </Section>
    );
};