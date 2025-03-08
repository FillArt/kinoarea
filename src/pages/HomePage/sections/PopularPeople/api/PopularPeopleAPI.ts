import {instance} from "@/instance/instance.ts";

export const PopularPeopleAPI = {
    getPopularPeople(timeWindow: "day" | "week") {
        return instance.get(`trending/person/${timeWindow}`);
    }
}