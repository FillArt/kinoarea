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
                return {results: res.data.results}
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
            }
        }, {
            fulfilled: (state, action) => {

                const today = new Date();
                today.setHours(0, 0, 0, 0);

                state.moviesList = action.payload.results.filter((movie) => {
                    if (!movie.release_date) return false; // Если даты нет, исключаем фильм
                    const movieDate = new Date(movie.release_date);
                    return movieDate >= today; // Оставляем только сегодняшние и будущие
                })
            }
        })
    })
})

export const ExpectedProductsSliceReducer = ExpectedProductsSlice.reducer
export const {fetchMovies} = ExpectedProductsSlice.actions
export const {MoviesSelector, ExpectedProductsLoadedSelector} = ExpectedProductsSlice.selectors