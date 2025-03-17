import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {MovieType} from "@/shared/types/MovieType.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const PopularFilmsSlice = createAppSlice({
    name: 'PopularFilms',
    initialState: [] as MovieType[] ,
    selectors: {
        PopularFilmsSelector: (state) => state,
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
                fulfilled: (_,action) => {
                    const allMovies: MovieType[] = action.payload.flatMap(data => data.results);
                    const uniqueMovies = allMovies
                        .filter((movie, index, self) => index === self.findIndex((m) => m.id === movie.id))
                        .slice(0, 100);

                    return uniqueMovies.sort((a, b) => b.vote_average - a.vote_average);
                },
            }
        )
    })
})


export const PopularFilmsReducer = PopularFilmsSlice.reducer
export const {fetchPopularMoviesTC} = PopularFilmsSlice.actions;
export const {PopularFilmsSelector} = PopularFilmsSlice.selectors