import {configureStore} from "@reduxjs/toolkit";
import {NewTrailersSlice} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {NewsSlice} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {BoxOfficeSlice} from "@/pages/home/sections/BoxOffice/model/BoxOfficeSlice.ts";
import {baseApi} from "@/shared/api/baseApi.ts";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [NewTrailersSlice.name]: NewTrailersSlice.reducer,
        [NewsSlice.name]: NewsSlice.reducer,
        [BoxOfficeSlice.name]: BoxOfficeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-expect-error: output for debugging the store
window.store = store