import {configureStore} from "@reduxjs/toolkit";

import {NowInCinemaSlice} from "@/pages/home/sections/NowInCinema/model/NowInCinemaSlice.ts";
import {NewTrailersSlice} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";

export const store = configureStore({
   reducer: {
       [NowInCinemaSlice.name]: NowInCinemaSlice.reducer,
       [NewTrailersSlice.name]: NewTrailersSlice.reducer
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-expect-error: output for debugging the store
window.store = store