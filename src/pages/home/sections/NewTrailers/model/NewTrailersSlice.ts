import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {MovieType, TrailerType} from "@/shared/api/movies/movieType.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const NewTrailersSlice = createAppSlice({
    name: 'NewTrailers',
    initialState: {
        main: {} as TrailerType,
        trailers: [] as TrailerType[],
        isLoaded: false,
    },
    selectors: {
        newTrailersMainSelector: (state) => state.main,
        newTrailersSelector: (state) => state.trailers,
        newTrailersLoadedSelector: (state) => state.isLoaded,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllMovieTrailersTC.fulfilled, (state, action) => {
                if (action.payload.length > 0) {
                    state.main = action.payload[0];
                    state.trailers = action.payload.slice(1);
                } else {
                    state.main = {} as TrailerType;
                    state.trailers = [];
                }
                state.isLoaded = true;
            })
            .addCase(fetchAllMovieTrailersTC.rejected, (state, action) => {
                console.error(action.payload);
                state.isLoaded = true;
            });
    },
    reducers: create => ({
        changeMovieInMainAC: create.reducer<{idMovie: number}>((state, action) => {
            const foundTrailer = state.trailers.find((trailer) => trailer.id === action.payload.idMovie);
            if (foundTrailer) {
                state.main = foundTrailer;
            }
        })
    })
})


export const fetchMovieDetailsTC = createAsyncThunk<TrailerType | undefined, number>(
    `${NewTrailersSlice.name}/fetchMovieDetails`,
    async (id, {rejectWithValue}) => {
        try {
            const movieInfo = await movieAPI.getTrailer(id);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const trailer = movieInfo.data.results[0];

            if (!trailer) return undefined;

            const posterUrl = `https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`;

            return {
                id,
                posterUrl,
                trailer: {
                    name: trailer.name,
                    url: trailer.key
                }
            };
        } catch (error) {
            return rejectWithValue(`Ошибка загрузки трейлера фильма с id ${id}: ${error}`);
        }
    }
);

export const fetchAllMovieTrailersTC = createAsyncThunk<TrailerType[], MovieType[]>(
    `${NewTrailersSlice.name}/fetchAllMovieTrailers`,
    async (movies, {dispatch, rejectWithValue}) => {
        try {
            const results = await Promise.all(
                movies.map((movie: MovieType) => dispatch(fetchMovieDetailsTC(movie.id!)).unwrap())
            );
            return results.filter((result): result is TrailerType => result !== undefined);
        } catch (error) {
            return rejectWithValue(`Ошибка загрузки всех трейлеров: ${error}`);
        }
    }
);


export const NewTrailersReducer = NewTrailersSlice.reducer;
export const { changeMovieInMainAC } = NewTrailersSlice.actions;
export const { newTrailersMainSelector, newTrailersLoadedSelector, newTrailersSelector } = NewTrailersSlice.selectors;