import {instance} from "@/shared/api/instance.ts";
import {GenreType, MovieType} from "@/shared/types/MovieType.ts";

export const movieAPI = {
    getNowPlaying() {
        return instance.get<{ results: MovieType[] }>("/movie/now_playing")
    },
    getGenres() {
        return instance.get<{ genres: GenreType[] }>("/genre/movie/list")
    },
    getTrailer(movie_id: number) {
        return instance.get(`/movie/${movie_id}/videos`)
    },
    getPopular100(page = 1) {
        return instance.get<{ results: MovieType[] }>(`movie/popular?page=${page}`)
    }
}