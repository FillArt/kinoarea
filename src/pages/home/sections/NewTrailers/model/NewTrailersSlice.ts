import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {TrailerType} from "@/shared/api/movies/movieType.ts";
import {current} from "@reduxjs/toolkit";

export const NewTrailersSlice = createAppSlice({
    name: 'NewTrailers',
    initialState: {
        main: null as TrailerType | null,
        trailers: [] as TrailerType[],
        allTrailers: [] as TrailerType[],
    },
    selectors: {
        newTrailersMainSelector: (state) => state.main,
        newTrailersSelector: (state) => state.trailers,
    },

    reducers: create => ({
        changeMovieInMainAC: create.reducer<{ idMovie: number }>((state, action) => {
            console.log(action.payload.idMovie, 'Здесь происходят изменения');

            state.main = state.allTrailers.filter(trailer => trailer.id === action.payload.idMovie)[0]
            state.trailers = state.allTrailers.filter(trailer => trailer.id !== action.payload.idMovie)
        }),


        initAllTrailersAC: create.reducer<{ trailers: TrailerType[] }>((state, action) => {
            state.allTrailers = action.payload.trailers;
            const firstTrailer = state.allTrailers[0]

            state.main = state.allTrailers[0];
            state.trailers = state.allTrailers.filter(trailer => trailer.id !== firstTrailer?.id);

            console.log(current(state))
        })


    })
})


export const NewTrailersReducer = NewTrailersSlice.reducer;
export const {changeMovieInMainAC, initAllTrailersAC} = NewTrailersSlice.actions;
export const {newTrailersMainSelector, newTrailersSelector} = NewTrailersSlice.selectors;