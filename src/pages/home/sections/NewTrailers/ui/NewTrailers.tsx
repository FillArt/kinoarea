import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect, useState} from "react";

import ArrowIcon from '../assets/arrow.svg'
import {MainPreview} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPreview.tsx";
import {MovieSlider} from "@/pages/home/sections/NewTrailers/ui/MovieSlider/MovieSlider.tsx";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {nowMoviesSelector} from "@/pages/home/sections/NowInCinema/model/NowInCinemaSlice.ts";
import {
    changeMovieInMainAC,
    fetchAllMovieTrailersTC
} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {useTranslation} from "react-i18next";
import {Section} from "@/shared/ui/sections/Section.tsx";


export const NewTrailers = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(nowMoviesSelector)
    const [isVideoMode, setIsVideoMode] = useState(false)
    const {t} = useTranslation("newTrailers")

    useEffect(() => {
        if (movies.length) {
            dispatch(fetchAllMovieTrailersTC(movies));
        }
    }, [movies]);

    const chooseNextMovie = (idMovie: number) => {
        dispatch(changeMovieInMainAC({idMovie}))
        setIsVideoMode(false)
    }

    return (
        <Section>
            <SectionTitle line={false} title={t('title')} sectionVersion="two">
                <a className="tabletLg:text-[22px] text-[18px] flex items-center" href="/">
                    {t('button_title')}
                    <img src={ArrowIcon} alt="Стрелка" className="tabletLg:ml-[27px] ml-[14px] w-6 h-6"/>
                </a>
            </SectionTitle>

            <div className="phone:mt-[32px] mt-[18px] grid">
                <MainPreview videoMod={isVideoMode} setVideoMod={setIsVideoMode}/>
                <MovieSlider onClick={chooseNextMovie}/>
            </div>
        </Section>
    );
};