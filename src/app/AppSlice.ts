import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {PayloadAction} from "@reduxjs/toolkit";

type LanguageType = "en" | "ru"

export const AppSlice = createAppSlice({
    name: "App",
    initialState: {
        language: "en" as LanguageType,
    },
    selectors: {
        appLanguageSelector: state => state.language,
    },
    reducers: () => ({
        setLanguage(state, action: PayloadAction<LanguageType>) {
            state.language = action.payload;
        },
    })
})

export const AppSliceReducer = AppSlice.reducer;
export const {appLanguageSelector} = AppSlice.selectors;
export const {setLanguage} = AppSlice.actions;