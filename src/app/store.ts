import {configureStore} from "@reduxjs/toolkit";
import {NewTrailersSlice} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {PopularPeopleSlice} from "@/pages/home/sections/PopularPeople/model/PopularPeopleSlice.ts";
import {NewsSlice} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {ExpectedProductsSlice} from "@/pages/home/sections/ExpectedProducts/model/ExpectedProductsSlice.ts";
import {BoxOfficeSlice} from "@/pages/home/sections/BoxOffice/model/BoxOfficeSlice.ts";
import {baseApi} from "@/shared/api/baseApi.ts";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [NewTrailersSlice.name]: NewTrailersSlice.reducer,
        [PopularPeopleSlice.name]: PopularPeopleSlice.reducer,
        [NewsSlice.name]: NewsSlice.reducer,
        [ExpectedProductsSlice.name]: ExpectedProductsSlice.reducer,
        [BoxOfficeSlice.name]: BoxOfficeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-expect-error: output for debugging the store
window.store = store