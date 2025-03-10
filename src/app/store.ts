
import {configureStore} from "@reduxjs/toolkit";

// export const store = configureStore({})
// export const store = configureStore({})
//
// export type RootState = ReturnType<typeof store.getState>
//
// export type AppDispatch = typeof store.dispatch

// temporarily!!!!
export const store = {
    getState() {
        return []
    },
    subscribe() {}
}

// @ts-expect-error: output for debugging the store
window.store = store