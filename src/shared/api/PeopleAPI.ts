import {instance} from "@/shared/api/instance.ts";
import {PeopleType} from "@/shared/types/PepoleType.ts";

export const peopleAPI = {
    getPopularPeople(timeWindow: "day" | "week") {
        return instance.get<{ results: PeopleType[] }>(`trending/person/${timeWindow}`);
    }
}