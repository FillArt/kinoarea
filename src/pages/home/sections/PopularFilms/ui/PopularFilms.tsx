import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";
import {useEffect, useMemo, useState} from "react";
import {yearsList} from "@/pages/home/sections/PopularFilms/model/yearsList.ts";
import {
    fetchPopularMoviesTC, PopularFilmsLoadingSelector,
    PopularFilmsSelector
} from "@/pages/home/sections/PopularFilms/model/PopularFilmsSlice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {nowGenreSelector} from "@/pages/home/sections/NowInCinema/model/NowInCinemaSlice.ts";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useTranslation} from "react-i18next";
import {Slider} from "@/widgets/Slider/ui/Slider.tsx";
import {Section} from "@/shared/ui/sections/Section.tsx";
import {Popup} from "@/widgets/Popup/Popup.tsx";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {CinemaListSkeleton} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaListSkeleton.tsx";


export const PopularFilms = () => {
    const [filter, setFilter] = useState("All");
    const [isShow, setIsShow] = useState<boolean>(false)
    const [numberOfFilms, setNumberOfFilms] = useState<number>(4)

    const dispatch = useAppDispatch();
    const popularFilms = useAppSelector(PopularFilmsSelector)
    const genreMap = useAppSelector(nowGenreSelector)
    const isLoaded = useAppSelector(PopularFilmsLoadingSelector)

    const breakpoint = useBreakpoint()
    const {t} = useTranslation("popularFilms");

    const formatMovies = useMemo(() => {
        return popularFilms.map((movie) => ({
            ...movie,
            genres: movie.genre_ids?.map((id: number) => genreMap[id]),
        }));
    }, [popularFilms, genreMap]);

    const [filteredMovies, setFilteredMovies] = useState(formatMovies);

    useEffect(() => {
        dispatch(fetchPopularMoviesTC())
    }, []);

    useEffect(() => {
        setFilteredMovies(formatMovies);
    }, [formatMovies]);

    useEffect(() => {
        if (breakpoint === "desktop") {
            setIsShow(false)
            setNumberOfFilms(4)
        } else if (breakpoint === "phone") setNumberOfFilms(2)
        else if (breakpoint === "tablet") setNumberOfFilms(3)
    }, [breakpoint]);


    const onClickHandler = ((filter: string) => {
        setFilter(filter);
        if (filter !== "All") {
            setFilteredMovies(formatMovies.filter(movies => movies.release_date?.split('-')[0] === filter));
        } else {
            setFilteredMovies(formatMovies)
        }
    })

    const prepareYearsList = [t('all'), ...yearsList];

    return (
        <>
            <Popup isShow={isShow} setShow={setIsShow}>
                <div className="flex flex-col items-center mt-5 gap-[20px]">
                    {prepareYearsList.map((item) => (
                        <button
                            key={item}
                            onClick={() => onClickHandler(item as string)}
                            className={`${
                                filter === item ? "opacity-100 text-[#3657CB]" : "opacity-50"
                            } text-white
                                        tabletLg:text-smallFontSize
                                        text-smallFontSizeTabletLg hover:text-[#3657CB]`}
                        >

                            {item}
                        </button>
                    ))}
                </div>
            </Popup>


            <Section>
                <SectionTitle title={t('title')}>
                    <div className="tabletLg:max-w-[490px] max-w-[408px] w-full phone:flex hidden justify-between z-10">
                        {prepareYearsList.map((item) => (
                            <button
                                key={item}
                                onClick={() => onClickHandler(item as string)}
                                className={`${
                                    filter === item ? "opacity-100" : "opacity-50 hover:text-[#3657CB] hover:opacity-100"
                                } tabletLg:text-smallFontSize text-[15px]`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="phone:hidden block mt-[8px]">
                        <ButtonIcon onClick={() => setIsShow(true)} style="secondary">
                            <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                        </ButtonIcon>
                    </div>

                </SectionTitle>

                {filteredMovies.length > 0 ? (
                    <div className="tabletLg:m-0 mt-[-35px]">
                        {!isLoaded ?
                            <CinemaListSkeleton numberOfFilms={numberOfFilms}/> : <Slider movies={filteredMovies}/>
                        }
                    </div>
                ) : (
                    <EmptyCinemaList/>
                )}

            </Section>
        </>
    );
};