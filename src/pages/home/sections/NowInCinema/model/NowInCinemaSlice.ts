import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";

export const NowInCinemaSlice = createAppSlice({
    name: 'NowInCinema',
    initialState: [],
    selectors: {},
    reducers: create => ({
        test: create.reducer((state, action) => {
            console.log(action.payload, state);
        })
    })
})

export const NowInCinemaReducer = NowInCinemaSlice.reducer;
export const {} = NowInCinemaSlice.selectors
export const {test} = NowInCinemaSlice.actions;