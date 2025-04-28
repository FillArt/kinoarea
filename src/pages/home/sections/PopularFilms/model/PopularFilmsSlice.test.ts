import {beforeEach, describe, expect, it, vi} from "vitest";
import {fetchPopularMoviesTC, PopularFilmsReducer} from "./PopularFilmsSlice";
import {MovieType} from "@/shared/api/movies/movieType.ts";

// Мокаем API
vi.mock("@/shared/api/MovieAPI", () => ({
    movieAPI: {
        getPopular100: vi.fn(),
    },
}));

describe("PopularFilmsSlice", () => {
    let initialState: {
        movies: MovieType[],
        isLoaded: false
    };

    beforeEach(() => {
        initialState = {
            movies: [] as MovieType[],
            isLoaded: false
        };
    });

    // Тест на начальное состояние
    it("should return the initial state", () => {
        // @ts-expect-error - for test with undefined type action
        expect(PopularFilmsReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it("should update state with sorted unique movies when fetchPopularMoviesTC.fulfilled", () => {
        const mockMovies = [
            { id: 1, title: "Movie 1", vote_average: 8.5 },
            { id: 2, title: "Movie 2", vote_average: 7.2 },
            { id: 3, title: "Movie 3", vote_average: 9.0 },
            { id: 1, title: "Movie 1", vote_average: 8.5 }, // Дубликат
        ] as MovieType[];

        const newState = PopularFilmsReducer(initialState, {
            type: fetchPopularMoviesTC.fulfilled.type,
            payload: [{ results: mockMovies }],
        });

        expect(newState).toEqual([
            { id: 3, title: "Movie 3", vote_average: 9.0 },
            { id: 1, title: "Movie 1", vote_average: 8.5 },
            { id: 2, title: "Movie 2", vote_average: 7.2 },
        ]);
    });

    // Тест на отклоненный запрос
    it("should return initial state when fetchPopularMoviesTC is rejected", () => {
        const newState = PopularFilmsReducer(initialState, {
            type: fetchPopularMoviesTC.rejected.type,
            error: "Network error",
        });

        expect(newState).toEqual({
            movies: [],
            isLoaded: false,
        });
    });
});
