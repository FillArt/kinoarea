import {useCallback, useEffect, useState} from "react";
import {HomePageLayout} from "@/shared/layouts";
import {NowInCinema} from "@/pages/home/sections/NowInCinema/ui/NowInCinema.tsx";
import {NewTrailers} from "@/pages/home/sections/NewTrailers/ui/NewTrailers.tsx";
import {PopularFilms} from "@/pages/home/sections/PopularFilms/ui/PopularFilms.tsx";
import {PopularPeople} from "@/pages/home/sections/PopularPeople/ui/PopularPeople.tsx";
import {GenreType, MovieType} from "@/shared/types/MovieType.ts";
import {PeopleType} from "@/shared/types/PepoleType.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";
import {peopleAPI} from "@/shared/api/PeopleAPI.ts";

export const HomePage = () => {

    const [movies, setMovies] = useState<MovieType[]>([]);
    const [allMovies, setAllMovies] = useState<MovieType[]>([]);
    const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
    const [genres, setGenres] = useState<GenreType[]>([]);
    const [popularPersonDay, setPopularPersonDay] = useState<PeopleType[]>([]);
    const [popularPersonWeek, setPopularPersonWeek] = useState<PeopleType[]>([]);

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
                const response = await movieAPI.getGenres()
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
                const response = await movieAPI.getNowPlaying()
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
        const fetchPopularMovies = async () => {
            try {
                const pages = [1, 2, 3, 4, 5];

                const responses = await Promise.all(
                    pages.map(page => movieAPI.getPopular100(page))
                );

                const allMovies: MovieType[] = responses.flatMap(response => response.data.results);

                const uniqueMovies = allMovies.filter(
                    (movie, index, self) =>
                        index === self.findIndex((m) => m.id === movie.id)
                ).slice(0, 100);

                const formatMovies = uniqueMovies.map((movie) => ({
                    ...movie,
                    genres: movie.genre_ids?.map((id: number) => genreMap[id]),
                }));

                const sortedMovies = formatMovies.sort((a, b) => b.vote_average - a.vote_average)

                setPopularMovies(sortedMovies);
            } catch (e) {
                console.error(`Ошибка загрузки 100 популярных фильмов: ${e}`);
            } finally {
                setLoading(false);
            }
        };

        fetchMoviesNow()
        fetchPopularMovies()

    }, [genres]);

    useEffect(() => {

        const fetchPopularPerson = async (time: 'day' | 'week') => {
            const res = await peopleAPI.getPopularPeople(time)
            return res.data.results;

        }

        fetchPopularPerson('day').then((res) => setPopularPersonDay(res.slice(0,6)))
        fetchPopularPerson('week').then((res) => setPopularPersonWeek(res.slice(0,6)))
    }, []);

    return (
        <HomePageLayout>
            <NowInCinema movies={movies} loading={loading} allMoviesHandler={allMoviesHandler} />
            <NewTrailers movies={movies} />
            <PopularFilms movies={popularMovies} />
            <PopularPeople popularDay={popularPersonDay} popularWeek={popularPersonWeek} />
        </HomePageLayout>
    );
};