import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";

import {MovieType} from "@/shared/types/MovieType.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const NowInCinemaSlice = createAppSlice({
    name: 'NowInCinema',
    initialState: {
        movies: [] as MovieType[],
        genres: [] as Record<number, string>,
        isLoaded: false,
    },
    selectors: {
        nowMoviesSelector: (state) => state.movies,
        nowLoadedSelector: (state) => state.isLoaded,
    },
    reducers: create => ({
        fetchGenresTC: create.asyncThunk(
            async (_, thunkAPI) => {
                try {
                    const res = await movieAPI.getGenres()
                    return {genres: res.data.genres}
                } catch (error) {
                    return thunkAPI.rejectWithValue(error)
                }
            }, {
                fulfilled: (state, action) => {
                    state.genres = action.payload.genres.reduce((acc, genre) => {
                        acc[genre.id] = genre.name;
                        return acc;
                    }, {} as Record<number, string>)
                }
            }
        ),
        fetchMoviesTC: create.asyncThunk(
            async (_, thunkAPI) => {
                try {
                    const res = await movieAPI.getNowPlaying()
                    return {movies: res.data.results}
                } catch (error) {
                    return thunkAPI.rejectWithValue(error)
                }
            }, {
                fulfilled: (state, action) => {
                    if (Object.keys(state.genres).length === 0) return;

                    state.movies = action.payload.movies.map((movie) => ({
                        ...movie,
                        genres: movie.genre_ids?.map((id: number) => state.genres[id]),
                    }))

                    state.isLoaded = true

                }
            }
        )
    })
})

export const NowInCinemaReducer = NowInCinemaSlice.reducer;
export const { nowMoviesSelector, nowLoadedSelector } = NowInCinemaSlice.selectors
export const {fetchGenresTC, fetchMoviesTC} = NowInCinemaSlice.actions;