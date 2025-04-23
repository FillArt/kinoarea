import {useEffect, useState} from "react";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {Filter, useCategoriesList} from "@/pages/home/sections/NowInCinema/hooks/useCategoriesList.ts";
import {useTranslation} from "react-i18next";

import {
    fetchGenresTC,
    fetchMoviesTC,
    nowLoadedSelector,
    nowMoviesSelector
} from "@/pages/home/sections/NowInCinema/model/NowInCinemaSlice.ts";

import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";

import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {CinemaList} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaList.tsx";

import {CinemaListSkeleton} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaListSkeleton.tsx";
import {Popup} from "@/widgets/Popup/Popup.tsx";


export const NowInCinema = () => {
    const [filter, setFilter] = useState<Filter>("all");
    const [isShow, setIsShow] = useState<boolean>(false)
    const [fullStatus, setFullStatus] = useState<boolean>(false);
    const [numberOfFilms, setNumberOfFilms] = useState<number>(8)

    const {t} = useTranslation("nowInCinema");
    const breakpoint = useBreakpoint()
    const categoriesList = useCategoriesList();


    const dispatch = useAppDispatch()
    const movies = useAppSelector(nowMoviesSelector)
    const isLoaded = useAppSelector(nowLoadedSelector)

    useEffect(() => {
        if (breakpoint === "phone") setNumberOfFilms(6)
        else if (breakpoint === "tablet") setNumberOfFilms(9)
        else {
            setIsShow(false)
            setNumberOfFilms(8)
        }
    }, [breakpoint]);


    useEffect(() => {
        dispatch(fetchGenresTC())
        dispatch(fetchMoviesTC())
    }, []);


    const onClickHandler = (filter: Filter) => {
        setFullStatus(true)
        setFilter(filter)
    };

    const showMoreMovies = () => setFullStatus(true);

    return (
        <>
            <Popup isShow={isShow} setShow={setIsShow}>
                <div className="flex flex-col items-center mt-5 gap-[20px]">
                    {categoriesList.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => onClickHandler(item.key as Filter)}
                            className={`${
                                filter === item.key ? "opacity-100 text-[#3657CB]" : "opacity-50"
                            } text-white
                                        tabletLg:text-smallFontSize
                                        text-smallFontSizeTabletLg hover:text-[#3657CB]`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

            </Popup>

            <section className="font-main  pt-6 mb-10 text-white">
                <div className="container max-w-container mx-auto">
                    <SectionTitle title={t("now_in_cinema_title")}>
                        <div className="tabletLg:max-w-[765px] max-w-[615px] w-full phone:flex hidden justify-between">
                            {categoriesList.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => onClickHandler(item.key as Filter)}
                                    className={`${
                                        filter === item.key ? "opacity-100 hover:text-white" : "opacity-50"
                                    } tabletLg:text-smallFontSize text-[15px] hover:text-[#3657CB] hover:opacity-100`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>

                        <div className="phone:hidden block mt-[8px]">
                            <ButtonIcon onClick={() => setIsShow(true)} style="secondary">
                                <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                            </ButtonIcon>
                        </div>

                    </SectionTitle>

                    {!isLoaded ? <CinemaListSkeleton numberOfFilms={numberOfFilms}/> :
                        <CinemaList movies={!fullStatus ? movies.slice(0, numberOfFilms) : movies} filter={filter}
                                    setFullStatus={setFullStatus}/>}


                    {!fullStatus && (
                        <div className="flex justify-center mt-14">
                            <ButtonBase title={t('button_all')} style="border" disable={!isLoaded}
                                        onClick={() => showMoreMovies()}/>
                        </div>
                    )}
                </div>
            </section>
        </>

    );
};
