import {beforeEach, describe, expect, it, vi} from "vitest";
import {fetchPopularPersonTC, PopularPeopleReducer} from "./PopularPeopleSlice";
import {PeopleType} from "@/shared/types/PepoleType";

// API
vi.mock("@/shared/api/PeopleAPI", () => ({
    peopleAPI: {
        getPopularPeople: vi.fn(),
    },
}));

describe("PopularPeopleSlice", () => {
    let initialState: {
        popularPersonDay: PeopleType[];
        popularPersonWeek: PeopleType[];
    };

    beforeEach(() => {
        initialState = {
            popularPersonDay: [],
            popularPersonWeek: [],
        };
    });

    it("should return the initial state", () => {
        // @ts-expect-error - для теста с неизвестным экшеном
        expect(PopularPeopleReducer(undefined, {type: undefined})).toEqual(initialState);
    });

    it("should handle fetchPopularPersonTC.fulfilled for 'day'", () => {
        const mockPeople: PeopleType[] = [
            {
                adult: true,
                gender: 0,
                id: 1,
                known_for_department: 'string',
                media_type: 'string',
                name: 'string',
                original_name: 'string',
                popularity: 0,
                profile_path: 'string',
            },
            {
                adult: true,
                gender: 0,
                id: 2,
                known_for_department: 'string',
                media_type: 'string',
                name: 'string',
                original_name: 'string',
                popularity: 0,
                profile_path: 'string',
            },
        ];

        const newState = PopularPeopleReducer(initialState, {
            type: fetchPopularPersonTC.fulfilled.type,
            payload: {period: "day", results: mockPeople},
        });

        expect(newState.popularPersonDay).toEqual(mockPeople);
        expect(newState.popularPersonWeek).toEqual([]); // Не должно изменяться
    });

    it("should handle fetchPopularPersonTC.fulfilled for 'week'", () => {
        const mockPeople: PeopleType[] = [
            {
                adult: true,
                gender: 0,
                id: 3,
                known_for_department: 'string',
                media_type: 'string',
                name: 'string',
                original_name: 'string',
                popularity: 0,
                profile_path: 'string',
            },
            {
                adult: true,
                gender: 0,
                id: 4,
                known_for_department: 'string',
                media_type: 'string',
                name: 'string',
                original_name: 'string',
                popularity: 0,
                profile_path: 'string',
            },
        ];

        const newState = PopularPeopleReducer(initialState, {
            type: fetchPopularPersonTC.fulfilled.type,
            payload: {period: "week", results: mockPeople},
        });

        expect(newState.popularPersonWeek).toEqual(mockPeople);
        expect(newState.popularPersonDay).toEqual([]); // Не должно изменяться
    });

    it("should handle fetchPopularPersonTC.rejected", () => {
        const newState = PopularPeopleReducer(initialState, {
            type: fetchPopularPersonTC.rejected.type,
        });

        expect(newState).toEqual(initialState); // Ошибка не должна менять состояние
    });
});
