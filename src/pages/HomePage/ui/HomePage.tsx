import {HomePageLayout} from "@/common/components/layouts";
import {NowInCinema} from "@/pages/HomePage/sections/NowInCinema";
import {NewTrailers} from "@/pages/HomePage/sections/NewTrailers";
import {useCallback, useEffect, useState} from "react";
import {GenreAPI, NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {NowInCinemaAPI} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.ts";
import {PopularFilms} from "@/pages/HomePage/sections/PopularFilms";
import {PopularFilmsAPI} from "@/pages/HomePage/sections/PopularFilms/api/PopularFilmsAPI.ts";
import {PopularPeople} from "@/pages/HomePage/sections/PopularPeople";
import {PopularPeopleAPI} from "@/pages/HomePage/sections/PopularPeople/api/PopularPeopleAPI.ts";
import {PopularPeopleType} from "@/pages/HomePage/sections/PopularPeople/api/PopularPeopleAPI.type.ts";

export const HomePage = () => {

    const [movies, setMovies] = useState<NowInCinemaType[]>([]);
    const [allMovies, setAllMovies] = useState<NowInCinemaType[]>([]);
    const [popularMovies, setPopularMovies] = useState<NowInCinemaType[]>([]);
    const [genres, setGenres] = useState<GenreAPI[]>([]);
    const [popularPersonDay, setPopularPersonDay] = useState<PopularPeopleType[]>([]);
    const [popularPersonWeek, setPopularPersonWeek] = useState<PopularPeopleType[]>([]);

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
        const fetchPopularMovies = async () => {
            try {
                let allMovies: NowInCinemaType[] = [];

                for (let page = 1; page <= 5; page++) {
                    const response = await PopularFilmsAPI.getPopular100(page);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    allMovies = [...allMovies, ...response.data.results];
                }

                const formatMovies = allMovies.map((movie) => ({
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
            const res = await PopularPeopleAPI.getPopularPeople(time)
            return res.data.results;

        }

        fetchPopularPerson('day').then((res) => setPopularPersonDay(res.slice(0,6)))
        fetchPopularPerson('week').then((res) => setPopularPersonWeek(res.slice(0,6)))
    }, []);

    useEffect(() => {
        console.log(popularPersonDay, 'POPULAR DAY');
        console.log(popularPersonWeek, 'POPULAR WEEK');
    }, [popularPersonDay, popularPersonWeek]);

    return (
        <HomePageLayout>
            <NowInCinema movies={movies} loading={loading} allMoviesHandler={allMoviesHandler} />
            <NewTrailers movies={movies} />
            <PopularFilms movies={popularMovies} />
            <PopularPeople popularDay={popularPersonDay} popularWeek={popularPersonWeek} />
        </HomePageLayout>
    );
};