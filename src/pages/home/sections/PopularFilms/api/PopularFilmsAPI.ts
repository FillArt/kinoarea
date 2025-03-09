import {instance} from "@/shared/api/instance.ts";
import {PopularPeopleType} from "@/pages/HomePage/sections/PopularPeople/api/PopularPeopleAPI.type.ts";

export const PopularFilmsAPI = {
    getPopular100(page = 1) {
        return instance.get<PopularPeopleType[]>(`movie/popular?page=${page}`)
    }
}