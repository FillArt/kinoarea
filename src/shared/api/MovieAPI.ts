import {instance} from "@/shared/api/instance.ts";
import {GenreType, MovieType, TrailerType} from "@/shared/api/movies/movieType.ts";

export const movieAPI = {
    getNowPlaying() {
        return instance.get<{ results: MovieType[] }>("/movie/now_playing")
    },
    getGenres() {
        return instance.get<{ genres: GenreType[] }>("/genre/movie/list")
    },
    getTrailer(movie_id: number) {
        return instance.get<{result: TrailerType[]}>(`/movie/${movie_id}/videos`)
    },
    getPopular100(page = 1) {
        return instance.get<{ results: MovieType[] }>(`movie/popular?page=${page}`)
    },
    getUpcomingMovie() {
        return instance.get<{ results: MovieType[] }>("movie/upcoming")
    },
    getDiscoverMovies(payload: {startDate: string, endDate: string}) {
        return instance.get<{ results: MovieType[] }>(
            `/discover/movie?sort_by=revenue.desc&primary_release_date.gte=${payload.startDate}&primary_release_date.lte=${payload.endDate}`
        );
    },
    getInfoMovie(movie_id: number) {
        return instance.get(`movie/${movie_id}`);
    }
}