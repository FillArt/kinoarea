import {HomePageLayout} from "@/common/components/layouts";
import {NowInCinema} from "@/pages/HomePage/sections/NowInCinema";
import {NewTrailers} from "@/pages/HomePage/sections/NewTrailers";
import {useCallback, useEffect, useState} from "react";
import {GenreAPI, NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {NowInCinemaAPI} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.ts";

export const HomePage = () => {

    const [movies, setMovies] = useState<NowInCinemaType[]>([]);
    const [allMovies, setAllMovies] = useState<NowInCinemaType[]>([]);
    const [genres, setGenres] = useState<GenreAPI[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const genreMap: Record<number, string> = genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
    }, {} as Record<number, string>);

    const allMoviesHandler = useCallback(() => {
        setMovies(allMovies)
    },[allMovies])

    useEffect(() => {
        const fetchGeneres = async () => {
            try {
                const response = await NowInCinemaAPI.getGenres()
                setGenres(response.data.genres)
            } catch (e) {
                console.error(`Ошибка загрузки жанров: ${e}`)
            }
        }

        fetchGeneres()
    }, []);

    useEffect(() => {
        if (genres.length === 0) return;


        const fetchMoviesNow = async () => {
            try {
                const response = await NowInCinemaAPI.getNowPlaying()
                const formatMovies = response.data.results.map((movie) => ({
                    ...movie,
                    genres: movie.genre_ids?.map((id: number) => genreMap[id]),
                }))
                setAllMovies(formatMovies);
                setMovies(formatMovies.slice(0, 8));
            } catch (e) {
                console.error(`Ошибка загрузки фильмов: ${e}`)
            } finally {
                setLoading(false);
            }
        }

        fetchMoviesNow()
    }, [genres]);


    return (
        <HomePageLayout>
            <NowInCinema movies={movies} loading={loading} allMoviesHandler={allMoviesHandler} />
            <NewTrailers movies={movies} />
        </HomePageLayout>
    );
};