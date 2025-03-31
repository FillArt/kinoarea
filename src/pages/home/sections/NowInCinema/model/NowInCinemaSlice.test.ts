import {beforeEach, describe, expect, it, vi} from "vitest";
import {fetchGenresTC, fetchMoviesTC, NowInCinemaReducer} from "./NowInCinemaSlice";
import {MovieType} from "@/shared/types/MovieType";

// Mock API
vi.mock("@/shared/api/MovieAPI", () => ({
    movieAPI: {
        getGenres: vi.fn(),
        getNowPlaying: vi.fn(),
    },
}));

describe("NowInCinemaSlice", () => {
    let initialState: {
        movies: MovieType[];
        genres: Record<number, string>;
        isLoaded: boolean;
    };

    beforeEach(() => {
        initialState = {
            movies: [],
            genres: [],
            isLoaded: false,
        };
    });

    it("Should return the initial state", () => {
        // @ts-expect-error - for test with undefined type action
        expect(NowInCinemaReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it("Should handle fetchGenresTC.fulfilled and update genres", () => {
        const mockGenres = {
            genres: [
                { id: 1, name: "Action" },
                { id: 2, name: "Comedy" },
            ],
        };

        const newState = NowInCinemaReducer(initialState, {
            type: fetchGenresTC.fulfilled.type,
            payload: mockGenres,
        });

        expect(newState.genres).toEqual({ 1: "Action", 2: "Comedy" });
    });

    it("Should handle fetchMoviesTC.fulfilled and update movies", () => {
        const mockMovies = {
            movies: [
                { id: 101, title: "Movie 1", genre_ids: [1, 2] },
                { id: 102, title: "Movie 2", genre_ids: [2] },
            ],
        };

        const stateWithGenres = {
            ...initialState,
            genres: { 1: "Action", 2: "Comedy" },
        };

        const newState = NowInCinemaReducer(stateWithGenres, {
            type: fetchMoviesTC.fulfilled.type,
            payload: mockMovies,
        });

        expect(newState.movies).toEqual([
            { id: 101, title: "Movie 1", genre_ids: [1, 2], genres: ["Action", "Comedy"] },
            { id: 102, title: "Movie 2", genre_ids: [2], genres: ["Comedy"] },
        ]);
        expect(newState.isLoaded).toBe(true);
    });

    it("Should handle fetchMoviesTC.fulfilled but not update movies if genres are missing", () => {
        const mockMovies = {
            movies: [{ id: 101, title: "Movie 1", genre_ids: [1, 2] }],
        };

        const newState = NowInCinemaReducer(initialState, {
            type: fetchMoviesTC.fulfilled.type,
            payload: mockMovies,
        });

        expect(newState.movies).toEqual([]); // Should not update movies
        expect(newState.isLoaded).toBe(false);
    });

    it("Should handle fetchGenresTC.rejected", () => {
        const newState = NowInCinemaReducer(initialState, {
            type: fetchGenresTC.rejected.type,
        });

        expect(newState.genres).toEqual([]);
    });

    it("Should handle fetchMoviesTC.rejected", () => {
        const newState = NowInCinemaReducer(initialState, {
            type: fetchMoviesTC.rejected.type,
        });

        expect(newState.movies).toEqual([]);
        expect(newState.isLoaded).toBe(false);
    });
});
