import {baseApi} from "@/shared/api/baseApi.ts";
import {PeopleType} from "@/shared/api/people/peopleType.ts";

export const peopleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPopularPeople: build.query<PeopleType[], "day" | "week">({
            query: (timeWindow) => ({
                url: `trending/person/${timeWindow}`,
                method: "GET",
                params: {
                    language: import.meta.env.VITE_APP_LANGUAGE,
                    region: "US",
                },
            }),
            transformResponse: (response: { results: PeopleType[] }) => {
                return response.results;
            }
        })
    })
})

export const { useGetPopularPeopleQuery } = peopleApi