import {useEffect, useState} from "react";
import {SectionTitle} from "@/common/components/sections/SectionTitle.tsx";
import {categoriesList} from "@/pages/HomePage/sections/NowInCinema/model/categoriesList.ts";
import {CinemaList} from "@/pages/HomePage/sections/NowInCinema/ui/CinemaList";
import {GenreAPI, NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";
import {NowInCinemaAPI} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.ts";
import {CardMovieSkeleton} from "@/common/components/cards";
import Icon from "@/common/components/buttons/assets/burgerWhite.svg";
import {ButtonIcon} from "@/common/components/buttons/ButtonIcon.tsx";

export type Filter = "all" | "action" | "adventures" | "comedy" | "fantasy" | "thrillers" | "drama";

export const NowInCinema = () => {
    const [filter, setFilter] = useState<Filter>("all");
    const [movies, setMovies] = useState<NowInCinemaType[]>([]);
    const [allMovies, setAllMovies] = useState<NowInCinemaType[]>([]);
    const [genres, setGenres] = useState<GenreAPI[]>([]);

    const [isShowButton, setIsShowButton] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const onClickHandler = (filter: Filter) => {
        setFilter(filter);
        showMoreMovies()
    }

    const showMoreMovies = () => {
        setMovies(allMovies)
        setIsShowButton(false)
    };

    const genreMap: Record<number, string> = genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
    }, {} as Record<number, string>);


    useEffect(() => {
        NowInCinemaAPI.getGenres().then((r) => setGenres(r.data.genres));
    }, []);

    useEffect(() => {
        if (genres.length === 0) return;

        NowInCinemaAPI.getNowPlaying()
            .then((r) => {
                const formatMovies = r.data.results.map((movie) => ({
                    ...movie,
                    genres: movie.genre_ids?.map((id: number) => genreMap[id]),
                }));

                setAllMovies(formatMovies);
                setMovies(formatMovies.slice(0, 8));
                setLoading(false);
            });

    }, [genres]);


    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
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

                {loading ? (
                    <div className="mt-14 grid grid-cols-12 gap-[23px]">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="col-span-3">
                                <CardMovieSkeleton/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <CinemaList movies={movies} filter={filter}/>
                )}


                {isShowButton && (
                    <div className="flex justify-center mt-14">
                        <ButtonBase title='Все новинки' style="border" onClick={() => showMoreMovies()}/>
                    </div>
                )}
            </div>
        </section>
    );
};
