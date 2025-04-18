import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";
import {useEffect, useMemo, useState} from "react";
import {yearsList} from "@/pages/home/sections/PopularFilms/model/yearsList.ts";
import {
    fetchPopularMoviesTC,
    PopularFilmsSelector
} from "@/pages/home/sections/PopularFilms/model/PopularFilmsSlice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {nowGenreSelector} from "@/pages/home/sections/NowInCinema/model/NowInCinemaSlice.ts";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useTranslation} from "react-i18next";
import {Slider} from "@/widgets/Slider/ui/Slider.tsx";
import {Section} from "@/shared/ui/sections/Section.tsx";


export const PopularFilms = () => {
    const [filter, setFilter] = useState("All");

    const dispatch = useAppDispatch();
    const popularFilms = useAppSelector(PopularFilmsSelector)
    const genreMap = useAppSelector(nowGenreSelector)
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
        <Section>
            <SectionTitle title={t('title')}>
                <div className="tabletLg:max-w-[490px] max-w-[408px] w-full phone:flex hidden justify-between z-10">
                    {prepareYearsList.map((item) => (
                        <button
                            key={item}
                            onClick={() => onClickHandler(item as string)}
                            className={`${
                                filter === item ? "opacity-100" : "opacity-50"
                            } tabletLg:text-smallFontSize text-[15px]`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="phone:hidden block mt-[8px]">
                    <ButtonIcon onClick={() => alert('Заглушка')} style="secondary">
                        <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                    </ButtonIcon>
                </div>

            </SectionTitle>

            {filteredMovies.length > 0 ? (
                <div className="tabletLg:m-0 mt-[-35px]">
                    <Slider movies={filteredMovies}/>
                </div>
            ) : (
                <EmptyCinemaList/>
            )}

        </Section>
    );
};