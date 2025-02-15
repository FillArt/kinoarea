import {instance} from "@/instance/instance.ts";
import {GenreAPI, NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";


export const NowInCinemaAPI = {
    getGenres() {
        return instance.get<{ genres: GenreAPI[] }>("/genre/movie/list")
    },
    getNowPlaying() {
      return instance.get<{ results: NowInCinemaType[] }>("/movie/popular")
    }
}