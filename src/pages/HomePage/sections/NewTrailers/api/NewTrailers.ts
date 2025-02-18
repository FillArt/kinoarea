import {instance} from "@/instance/instance.ts";

export const NewTrailers = {
    getTrailer(movie_id: string) {
        return instance.get(`/movie/${movie_id}/videos`)
    }
}