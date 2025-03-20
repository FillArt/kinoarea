import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";

export const ExpectedProductsSlice = createAppSlice({
    name: 'ExpectedProducts',
    initialState: {},
    selectors: {
        ExpectedProductsSelector: state => state
    },
    reducers: create => ({
        test: create.reducer(() => {})
    })
})

export const ExpectedProductsSliceReducer = ExpectedProductsSlice.reducer
export const {test} = ExpectedProductsSlice.actions
export const {ExpectedProductsSelector} = ExpectedProductsSlice.selectors