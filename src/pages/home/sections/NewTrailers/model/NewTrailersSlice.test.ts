import {beforeEach, describe, expect, it, vi} from "vitest";
import {changeMovieInMainAC, fetchAllMovieTrailersTC, NewTrailersReducer} from "./NewTrailersSlice";
import {TrailerType} from "@/shared/api/movies/movieType.ts";

// API
vi.mock("@/shared/api/MovieAPI", () => ({
    movieAPI: {
        getTrailer: vi.fn(),
    },
}));

describe("NewTrailersSlice", () => {
    let initialState: {
        main: TrailerType;
        trailers: TrailerType[];
        isLoaded: boolean;
    };

    beforeEach(() => {
        initialState = {
            main: {} as TrailerType,
            trailers: [],
            isLoaded: false,
        };
    });


    it("should return to initial state", () => {
        // @ts-expect-error - for test with undefined type action
        expect(NewTrailersReducer(undefined, {type: undefined})).toEqual(initialState);
    });

    it("should update trailers and main on successful fetchAllMovieTrailersTC.fulfilled request", () => {
        const mockTrailers: TrailerType[] = [
            {id: 1, posterUrl: 'url1', trailer: {name: "Trailer 1", url: "url1"}},
            {id: 2, posterUrl: 'url2', trailer: {name: "Trailer 2", url: "url2"}},
        ];

        const newState = NewTrailersReducer(initialState, {
            type: fetchAllMovieTrailersTC.fulfilled.type,
            payload: mockTrailers,
        });

        expect(newState.main).toEqual(mockTrailers[0]);
        expect(newState.trailers).toEqual(mockTrailers.slice(1));
        expect(newState.isLoaded).toBe(true);
    });


    it("Should handle fetchAllMovieTrailersTC.rejected", () => {
        const errorMessage = "Test - Ошибка загрузки всех трейлеров";
        const newState = NewTrailersReducer(initialState, {
            type: fetchAllMovieTrailersTC.rejected.type,
            payload: errorMessage,
        });

        expect(newState.isLoaded).toBe(true);
        expect(newState.main).toEqual({});
        expect(newState.trailers).toEqual([]);
    });

    it("should update main trailer when changeMovieInMainAC is dispatched", () => {
        const mockTrailers: TrailerType[] = [
            {id: 1, posterUrl: 'url1', trailer: {name: "Trailer 1", url: "url1"}},
            {id: 2, posterUrl: 'url2', trailer: {name: "Trailer 2", url: "url2"}},
        ];
        const newState = NewTrailersReducer(
            {...initialState, trailers: mockTrailers},
            changeMovieInMainAC({idMovie: 2})
        );

        expect(newState.main).toEqual(mockTrailers[1]);
    });
});
