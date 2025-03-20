import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {MovieType} from "@/shared/types/MovieType.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const ExpectedProductsSlice = createAppSlice({
    name: 'ExpectedProducts',
    initialState: {
        isLoaded: false,
        moviesList: [] as MovieType[]
    },
    selectors: {
        MoviesSelector: state => state.moviesList,
        ExpectedProductsLoadedSelector: state => state.isLoaded
    },
    reducers: create => ({
        fetchMovies: create.asyncThunk( async (_,thunkAPI) => {
            try {
                const res = await movieAPI.getUpcomingMovie()
                console.log(res.data.results)
                return {results: res.data.results}
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
            }
        }, {
            fulfilled: (state, action) => {
                state.moviesList = action.payload.results
            }
        })
    })
})

export const ExpectedProductsSliceReducer = ExpectedProductsSlice.reducer
export const {fetchMovies} = ExpectedProductsSlice.actions
export const {MoviesSelector, ExpectedProductsLoadedSelector} = ExpectedProductsSlice.selectors