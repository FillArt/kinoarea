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

import {categoriesList} from "@/pages/home/sections/NowInCinema/model/categoriesList.ts";

export type Filter = "all" | "action" | "adventures" | "comedy" | "fantasy" | "thrillers" | "drama";

export const NowInCinema = () => {
    const [filter, setFilter] = useState<Filter>("all");
    const [fullStatus, setFullStatus] = useState<boolean>(false);

    const dispatch = useAppDispatch()

    const movies = useAppSelector(nowMoviesSelector)
    const isLoaded = useAppSelector(nowLoadedSelector)

    useEffect(() => {
        dispatch(fetchGenresTC())
        dispatch(fetchMoviesTC())
    }, []);

    const onClickHandler = (filter: Filter) => setFilter(filter);
    const showMoreMovies = () => setFullStatus(true);


    return (
        <section className="font-main  pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">

                <SectionTitle title={"Сейчас в кино"}>
                    <div className="tabletLg:max-w-[765px] max-w-[615px] w-full phone:flex hidden justify-between">
                        {categoriesList.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => onClickHandler(item.key as Filter)}
                                className={`${
                                    filter === item.key ? "opacity-100" : "opacity-50"
                                } tabletLg:text-smallFontSize text-[15px]`}
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
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="col-span-3">
                                <CardMovieSkeleton />
                            </div>
                        ))}
                    </div>
                ) : (
                    <CinemaList movies={!fullStatus ? movies.slice(0, 8) : movies} filter={filter} setFullStatus={setFullStatus} />
                )}


                {!fullStatus && (
                    <div className="flex justify-center mt-14">
                        <ButtonBase title='Все новинки' style="border" onClick={() => showMoreMovies()}/>
                    </div>
                )}
            </div>
        </section>
    );
};
