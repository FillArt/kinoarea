import { SectionTitle } from "@/shared/ui/sections/SectionTitle.tsx";
import { ButtonIcon } from "@/shared/ui/buttons/ButtonIcon.tsx";
import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";
import { useEffect, useState } from "react";
import { yearsList } from "@/pages/home/sections/PopularFilms/model/yearsList.ts";

import { useTranslation } from "react-i18next";
import { Section } from "@/shared/ui/sections/Section.tsx";
import { Popup } from "@/widgets/Popup/Popup.tsx";
import { useBreakpoint } from "@/shared/hooks/useBreakpoint.ts";
import { useGetPopular100MoviesQuery } from "@/shared/api/movies/movieApi.ts";
import { useMoviesWithGenres } from "@/shared/api/movies/hooks/useMoviesWithGenres.ts";
import { CinemaListSkeleton } from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaListSkeleton.tsx";
import { Slider } from "@/widgets/Slider/ui/Slider.tsx";
import { EmptyCinemaList } from "@/shared/ui/sections/EmptyCinemaList.tsx";

export const PopularFilms = () => {
    const { t } = useTranslation("popularFilms");
    const breakpoint = useBreakpoint();

    const { data } = useGetPopular100MoviesQuery();
    const { movies, isLoading } = useMoviesWithGenres({ movies: data ?? [] });

    const [filter, setFilter] = useState<string>(t("all"));
    const [filteredMovies, setFilteredMovies] = useState<typeof movies>([]);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [numberOfFilms, setNumberOfFilms] = useState<number>(4);

    // Обновляем filteredMovies при изменении movies или filter
    useEffect(() => {
        if (filter === t("all")) {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter((movie) => movie.release_date?.split("-")[0] === filter));
        }
    }, [movies, filter, t]);

    // Обновляем numberOfFilms и сбрасываем isShow при изменении брейкпоинта
    useEffect(() => {
        if (breakpoint === "desktop") {
            setIsShow(false);
            setNumberOfFilms(4);
        } else if (breakpoint === "phone") {
            setNumberOfFilms(2);
        } else if (breakpoint === "tablet") {
            setNumberOfFilms(3);
        }
    }, [breakpoint]);

    const onClickHandler = (selectedFilter: string) => {
        setFilter(selectedFilter);
    };

    const prepareYearsList = [t("all"), ...yearsList];

    return (
        <>
            <Popup isShow={isShow} setShow={setIsShow}>
                <div className="flex flex-col items-center mt-5 gap-[20px]">
                    {prepareYearsList.map((item) => (
                        <button
                            key={item}
                            onClick={() => onClickHandler(item)}
                            className={`${
                                filter === item ? "opacity-100 text-[#3657CB]" : "opacity-50"
                            } text-white tabletLg:text-smallFontSize text-smallFontSizeTabletLg hover:text-[#3657CB]`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </Popup>

            <Section>
                <SectionTitle title={t("title")}>
                    <div className="tabletLg:max-w-[490px] max-w-[408px] w-full phone:flex hidden justify-between z-10">
                        {prepareYearsList.map((item) => (
                            <button
                                key={item}
                                onClick={() => onClickHandler(item)}
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
                            <img src={Icon} width="12px" height="12px" alt="Close Popup" />
                        </ButtonIcon>
                    </div>
                </SectionTitle>

                {!isLoading ? (
                    <CinemaListSkeleton numberOfFilms={numberOfFilms} />
                ) : (
                    <div className="tabletLg:m-0 mt-[-35px]">
                        {filteredMovies.length > 0 ? <Slider movies={filteredMovies} /> : <EmptyCinemaList />}
                    </div>
                )}
            </Section>
        </>
    );
};
