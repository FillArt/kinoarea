import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {PeopleType} from "@/shared/types/PepoleType.ts";
import {peopleAPI} from "@/shared/api/PeopleAPI.ts";

type PeriodType = 'day' | 'week';

export const PopularPeopleSlice = createAppSlice({
    name: 'PopularPeople',
    initialState: {
        popularPersonDay: [] as PeopleType[],
        popularPersonWeek: [] as PeopleType[],
        isLoaded: false,
    },
    selectors: {
        PopularPersonSelector: (state, period: PeriodType) =>
            period === 'day' ? state.popularPersonDay : state.popularPersonWeek,
        PopularPersonLoadingSelector: state => state.isLoaded,
    },
    reducers: create => ({
        fetchPopularPersonTC: create.asyncThunk(
            async (period: PeriodType, thunkAPI) => {
                try {
                    const res = await peopleAPI.getPopularPeople(period);
                    return { period, results: res.data.results.slice(0, 6) };
                } catch (error) {
                    return thunkAPI.rejectWithValue(error);
                }
            },
            {
                fulfilled: (state, action) => {
                    const { period, results } = action.payload;
                    if (period === 'day') {
                        state.popularPersonDay = results;
                        state.isLoaded = true;
                    } else {
                        state.popularPersonWeek = results;
                        state.isLoaded = true
                    }
                },
            }
        ),
    }),
});

export const PopularPeopleReducer = PopularPeopleSlice.reducer;
export const { fetchPopularPersonTC } = PopularPeopleSlice.actions;
export const { PopularPersonSelector, PopularPersonLoadingSelector } = PopularPeopleSlice.selectors;
