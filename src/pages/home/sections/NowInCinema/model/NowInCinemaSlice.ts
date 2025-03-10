import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";

import {GenreType, MovieType} from "@/shared/types/MovieType.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const NowInCinemaSlice = createAppSlice({
    name: 'NowInCinema',
    initialState: {
        movies: [] as MovieType[],
        genre: [] as GenreType[],
        isLoaded: false,
    },
    selectors: {},
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
                    state.genre = action.payload.genres
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
                    state.movies = action.payload.movies
                }
            }
        )
    })
})

export const NowInCinemaReducer = NowInCinemaSlice.reducer;
export const {} = NowInCinemaSlice.selectors
export const {fetchGenresTC, fetchMoviesTC} = NowInCinemaSlice.actions;