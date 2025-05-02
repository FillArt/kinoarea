import {useGetGenresQuery, useGetNowPlayingQuery} from "@/shared/api/movies/movieApi.ts";
import {useMemo} from "react";


export const useNowPlayingWithGenres = () => {
    const { data: movies, isLoading: moviesLoading } = useGetNowPlayingQuery();
    const { data: genres, isLoading: genresLoading } = useGetGenresQuery();

    const isLoading = moviesLoading || genresLoading;

    const moviesWithGenres = useMemo(() => {
        if (!movies || !genres) return [];

        return movies.map((movie) => ({
            ...movie,
            genres: movie.genre_ids?.map((id) => genres[id] ?? []),
        }));
    }, [movies, genres]);

    return { movies: moviesWithGenres, isLoading };
}