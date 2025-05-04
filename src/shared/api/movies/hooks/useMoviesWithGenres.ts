import {useGetGenresQuery} from "@/shared/api/movies/movieApi.ts";
import {useMemo} from "react";
import {MovieType} from "@/shared/api/movies/movieType.ts";

type MoviesWithGenresProps = {
    movies: MovieType[] | []
}

export const useMoviesWithGenres = ({movies}: MoviesWithGenresProps) => {

    const { data: genres, isLoading: genresLoading } = useGetGenresQuery();
    const isLoading = movies || genresLoading;

    const moviesWithGenres = useMemo(() => {
        if (!movies || !genres) return [];

        return movies.map((movie) => ({
            ...movie,
            genres: movie.genre_ids?.map((id) => genres[id] ?? []),
        }));
    }, [movies, genres]);

    return { movies: moviesWithGenres, isLoading };
}