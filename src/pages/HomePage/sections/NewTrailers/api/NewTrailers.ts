import {instance} from "@/instance/instance.ts";

export const NewTrailersAPI = {
    getTrailer(movie_id: number) {
        return instance.get(`/movie/${movie_id}/videos`)
    }
}