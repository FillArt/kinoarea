import {useEffect, useState} from "react";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";

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
import {CardMovieSkeleton} from "@/shared/ui/cards";
import {useTranslation} from "react-i18next";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";

type CategoriesList = {
    key: string;
    title: string;
}
export type Filter = "all" | "action" | "adventures" | "comedy" | "fantasy" | "thrillers" | "drama";

export const NowInCinema = () => {
    const [filter, setFilter] = useState<Filter>("all");
    const [fullStatus, setFullStatus] = useState<boolean>(false);

    const { t } = useTranslation("nowInCinema");
    const [numberOfFilms, setNumberOfFilms] = useState<number>(8)

    const breakpoint  = useBreakpoint()

    useEffect(() => {
        if (breakpoint === "phone") setNumberOfFilms(6)
        else if (breakpoint === "tablet") setNumberOfFilms(9)
        else setNumberOfFilms(8)
    }, [breakpoint]);

    const categoriesList: CategoriesList[] = [
        { key: "all", title: t("all") },
        { key: "action", title: t("action") },
        { key: "adventures", title: t("adventures") },
        { key: "comedy", title: t("comedy") },
        { key: "fantasy", title: t("fantasy") },
        { key: "thrillers", title: t("thrillers") },
        { key: "drama", title: t("drama") },
    ]

    const dispatch = useAppDispatch()

    const movies = useAppSelector(nowMoviesSelector)
    const isLoaded = useAppSelector(nowLoadedSelector)

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
                        <ButtonIcon onClick={() => alert('Заглушка')} style="secondary">
                            <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                        </ButtonIcon>
                    </div>

                </SectionTitle>

                {!isLoaded ? (
                    <div className="mt-14 grid grid-cols-12 gap-[23px]">
                        {[...Array(numberOfFilms)].map((_, i) => (
                            <div key={i} className="tablet:col-span-3 phone:col-span-4 col-span-6">
                                <CardMovieSkeleton />
                            </div>
                        ))}
                    </div>
                ) : (
                    <CinemaList movies={!fullStatus ? movies.slice(0, numberOfFilms) : movies} filter={filter} setFullStatus={setFullStatus} />
                )}


                {!fullStatus && (
                    <div className="flex justify-center mt-14">
                        <ButtonBase title={t('button_all')} style="border" onClick={() => showMoreMovies()}/>
                    </div>
                )}
            </div>
        </section>
    );
};
