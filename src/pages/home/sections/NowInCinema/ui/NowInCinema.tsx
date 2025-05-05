import {useMoviesWithGenres} from "@/shared/api/movies/hooks/useMoviesWithGenres.ts";

import {useEffect, useState} from "react";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {useTranslation} from "react-i18next";
import {Filter, useCategoriesList} from "@/pages/home/sections/NowInCinema/hooks/useCategoriesList.ts";

import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";

import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import {ButtonFilter} from "@/shared/ui/buttons/ButtonFilter.tsx";

import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {Popup} from "@/widgets/Popup/Popup.tsx";

import {CinemaList} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaList.tsx";
import {CinemaListSkeleton} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaListSkeleton.tsx";
import {useGetNowPlayingQuery} from "@/shared/api/movies/movieApi.ts";


export const NowInCinema = () => {

    const {t} = useTranslation("nowInCinema");
    const { data: moviesNow} = useGetNowPlayingQuery();
    const { movies, isLoading } = useMoviesWithGenres({movies: moviesNow ?? []});

    const breakpoint = useBreakpoint()
    const categoriesList = useCategoriesList();

    const [filter, setFilter] = useState<Filter>("all");
    const [isShow, setIsShow] = useState<boolean>(false)
    const [fullStatus, setFullStatus] = useState<boolean>(true);
    const [numberOfFilms, setNumberOfFilms] = useState<number>(8)


    useEffect(() => {
        if (breakpoint === "phone") setNumberOfFilms(6)
        else if (breakpoint === "tablet") setNumberOfFilms(9)
        else {
            setIsShow(false)
            setNumberOfFilms(8)
        }
    }, [breakpoint]);


    const onClickHandler = (filter: Filter) => {
        setFullStatus(false)
        setFilter(filter)
    };

    const showMoreMovies = () => setFullStatus(false);

    return (
        <>
            <Popup isShow={isShow} setShow={setIsShow}>
                <div className="flex flex-col items-center mt-5 gap-[20px]">
                    {categoriesList.map((item) => (
                        <ButtonFilter
                            key={item.key}
                            isActive={filter === item.key}
                            onClick={() => onClickHandler(item.key as Filter)}
                            title={item.title}
                        />
                    ))}
                </div>
            </Popup>

            <section className="font-main  pt-6 mb-10 text-white">
                <div className="container max-w-container mx-auto">
                    <SectionTitle title={t("now_in_cinema_title")}>
                        <div className="tabletLg:max-w-[765px] max-w-[615px] w-full phone:flex hidden justify-between">
                            {categoriesList.map((item) => (
                                <ButtonFilter
                                    key={item.key}
                                    isActive={filter === item.key}
                                    onClick={() => onClickHandler(item.key as Filter)}
                                    title={item.title}
                                />
                            ))}
                        </div>

                        <div className="phone:hidden block mt-[8px]">
                            <ButtonIcon onClick={() => setIsShow(true)} style="secondary">
                                <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                            </ButtonIcon>
                        </div>
                    </SectionTitle>

                    {!isLoading ?
                        <CinemaList
                            movies={fullStatus ? movies.slice(0, numberOfFilms) : movies}
                            filter={filter}
                            setFullStatus={setFullStatus}
                            isLoading={isLoading}
                        /> : <CinemaListSkeleton numberOfFilms={numberOfFilms}/>
                    }

                    {fullStatus && (
                        <div className="flex justify-center mt-14">
                            <ButtonBase title={t('button_all')} style="border" disable={Boolean(isLoading)}
                                        onClick={() => showMoreMovies()}/>
                        </div>
                    )}
                </div>
            </section>
        </>

    );
};
