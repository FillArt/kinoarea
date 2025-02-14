import { useEffect, useState } from "react";
import { SectionTitle } from "@/common/components/sections/SectionTitle.tsx";
import { categoriesList } from "@/widgets/NowInCinema/model/categoriesList.ts";
import { ChinemaList } from "@/widgets/NowInCinema/ui/ChinemaList";
import { instance } from "@/instance/instance.ts";
import { GenreAPI, NowInCinemaAPI } from "@/widgets/NowInCinema/api/NowInCinemaAPI.types.ts";

export type Filter = "all" | "action" | "adventures" | "comedy" | "fantasy" | "thrillers" | "drama";

export const NowInCinema = () => {
    const [filter, setFilter] = useState<Filter>("all");

    const [movies, setMovies] = useState<NowInCinemaAPI[]>([]);
    const [genres, setGenres] = useState<GenreAPI[]>([]);

    const onClickHandler = (filter: Filter) => setFilter(filter);

    const genreMap: Record<number, string> = genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
    }, {} as Record<number, string>);

    useEffect(() => {
        instance.get<{ genres: GenreAPI[] }>("/genre/movie/list").then((r) => {
            setGenres(r.data.genres);
        });
    }, []);

    useEffect(() => {
        if (genres.length === 0) return;

        instance.get<{ results: NowInCinemaAPI[] }>("/movie/popular").then((r) => {
            const formatMovies = r.data.results.map((movie) => ({
                ...movie,
                genres: movie.genre_ids.map((id: any) => genreMap[id]), // Используем genreMap после его создания
            }));
            setMovies(formatMovies);
        });
    }, [genres]);

    return (
        <section className="font-main bg-backgroundColor pt-6 text-white">
            <div className="container max-w-container mx-auto">
                <SectionTitle title={"Сейчас в кино"}>
                    <div className="max-w-[765px] w-full flex justify-between">
                        {categoriesList.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => onClickHandler(item.key as Filter)}
                                className={`${
                                    filter === item.key ? "opacity-100" : "opacity-50"
                                } text-smallFontSize`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </SectionTitle>

                <ChinemaList movies={movies} />
            </div>
        </section>
    );
};
