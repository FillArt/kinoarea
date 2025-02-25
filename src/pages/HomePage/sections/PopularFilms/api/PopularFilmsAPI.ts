import {instance} from "@/instance/instance.ts";

export const PopularFilmsAPI = {
    getPopular100(page = 1) {
        return instance.get(`movie/popular?page=${page}`)
    }
}