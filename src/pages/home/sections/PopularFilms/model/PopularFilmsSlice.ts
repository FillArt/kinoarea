import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {MovieType} from "@/shared/types/MovieType.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const PopularFilmsSlice = createAppSlice({
    name: 'PopularFilms',
    initialState: {
        movies: [] as MovieType[],
        isLoaded: false,
    },
    selectors: {
        PopularFilmsSelector: (state) => state.movies,
        PopularFilmsLoadingSelector: (state) => state.isLoaded,
    },
    reducers: create => ({
        fetchPopularMoviesTC: create.asyncThunk(
            async (_, ThunkAPI) => {
                try {
                    const pages = [1, 2, 3, 4, 5];
                    const responses = await Promise.all(
                        pages.map(page => movieAPI.getPopular100(page).then(res => res.data))
                    );
                    return responses;
                } catch (error) {
                    return ThunkAPI.rejectWithValue(error);
                }
            },
            {
                fulfilled: (state, action) => {
                    const allMovies: MovieType[] = action.payload.flatMap(data => data.results);
                    const uniqueMovies = allMovies
                        .filter((movie, index, self) => index === self.findIndex((m) => m.id === movie.id))
                        .slice(0, 100);

                    state.movies = uniqueMovies.sort((a, b) => b.vote_average - a.vote_average);
                    state.isLoaded = true
                },
            }
        )
    })
})


export const PopularFilmsReducer = PopularFilmsSlice.reducer
export const {fetchPopularMoviesTC} = PopularFilmsSlice.actions;
export const {PopularFilmsSelector, PopularFilmsLoadingSelector} = PopularFilmsSlice.selectors