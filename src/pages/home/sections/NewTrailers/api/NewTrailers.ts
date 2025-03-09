import {instance} from "@/shared/api/instance.ts";

export const NewTrailersAPI = {
    getTrailer(movie_id: number) {
        return instance.get(`/movie/${movie_id}/videos`)
    }
}