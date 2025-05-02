import { describe, it, expect, vi, beforeEach } from "vitest";
import { ExpectedProductsSliceReducer, fetchMovies } from "./ExpectedProductsSlice";
import { MovieType } from "@/shared/api/movies/movieType.ts";

// API
vi.mock("@/shared/api/MovieAPI", () => ({
    movieAPI: {
        getUpcomingMovie: vi.fn(),
    },
}));

describe("ExpectedProductsSlice", () => {
    let initialState: { isLoaded: boolean; moviesList: MovieType[] };

    beforeEach(() => {
        initialState = {
            isLoaded: false,
            moviesList: [],
        };
    });

    it("Must return to initial state", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        expect(ExpectedProductsSliceReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it("Must update moviesList on successful fetchMovies.fulfilled request", () => {
        const mockMovies = [{ id: 1, title: "Movie 1" }] as MovieType[];

        const newState = ExpectedProductsSliceReducer(initialState, {
            type: fetchMovies.fulfilled.type,
            payload: { results: mockMovies },
        });

        expect(newState.moviesList).toEqual(mockMovies);
    });

    it("Should not change state on fetchMovies.rejected error", () => {
        const newState = ExpectedProductsSliceReducer(initialState, {
            type: fetchMovies.rejected.type,
            error: "Some error",
        });

        expect(newState).toEqual(initialState);
    });
});
