import {beforeEach, describe, expect, it} from "vitest";
import {changeMovieInMainAC, initAllTrailersAC, NewTrailersReducer} from "./NewTrailersSlice";
import {TrailerType} from "@/shared/api/movies/movieType.ts";

describe("NewTrailersSlice", () => {
    let initialState: {
        main: TrailerType | null,
        trailers: TrailerType[],
        allTrailers: TrailerType[],
    };

    beforeEach(() => {
        initialState = {
            main: null,
            trailers: [],
            allTrailers: [],
        };
    });

    it("should return initial state for unknown action", () => {
        // @ts-expect-error - testing default reducer case
        expect(NewTrailersReducer(undefined, {type: undefined})).toEqual(initialState);
    });

    it("should initialize allTrailers, set main and filter trailers", () => {
        const mockTrailers: TrailerType[] = [
            {id: 1, posterUrl: 'url1', trailer: {name: "Trailer 1", url: "url1"}},
            {id: 2, posterUrl: 'url2', trailer: {name: "Trailer 2", url: "url2"}},
        ];

        const newState = NewTrailersReducer(initialState, initAllTrailersAC({trailers: mockTrailers}));

        expect(newState.allTrailers).toEqual(mockTrailers);
        expect(newState.main).toEqual(mockTrailers[0]);
        expect(newState.trailers).toEqual([mockTrailers[1]]);
    });

    it("should update main trailer when changeMovieInMainAC is dispatched", () => {
        const mockTrailers: TrailerType[] = [
            {id: 1, posterUrl: 'url1', trailer: {name: "Trailer 1", url: "url1"}},
            {id: 2, posterUrl: 'url2', trailer: {name: "Trailer 2", url: "url2"}},
        ];

        const stateWithAll = {
            ...initialState,
            allTrailers: mockTrailers
        };

        const newState = NewTrailersReducer(
            stateWithAll,
            changeMovieInMainAC({idMovie: 2})
        );

        expect(newState.main).toEqual(mockTrailers[1]);
        expect(newState.trailers).toEqual([mockTrailers[0]]);
    });
});
