import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";

export const NewsSlice = createAppSlice({
    name: 'News',
    initialState: [],
    selectors: {
        NewsSelector: state => state
    },
    reducers: create => ({
        test: create.reducer(() => {})
    }),
})

export const NewsSliceReducer = NewsSlice.reducer
export const {test} = NewsSlice.actions
export const { NewsSelector } = NewsSlice.selectors