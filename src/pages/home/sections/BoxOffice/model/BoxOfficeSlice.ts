import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";
import {movieAPI} from "@/shared/api/MovieAPI.ts";
import {BoxOfficeType} from "@/shared/types/MovieType.ts";

export const BoxOfficeSlice = createAppSlice({
    name: "BoxOffice",
    initialState: {
        isLoaded: false,
        movies: [] as BoxOfficeType[],
    },
    selectors: {
        BoxOfficeSelector: state => state.movies,
        BoxOfficeLoadedSelector: state => state.isLoaded

    },
    reducers: create => ({
        fetchBoxOfficeTC: create.asyncThunk(async (_, {rejectWithValue}) => {
            try {
                const today = new Date();
                const lastWeek = new Date();
                lastWeek.setDate(today.getDate() - 7);

                const res = await movieAPI.getDiscoverMovies({
                    startDate: lastWeek.toISOString().split("T")[0],
                    endDate: today.toISOString().split("T")[0],
                });

                const boxOfficeData = await Promise.all(
                    res.data.results.map(async (item) => {
                        // @ts-expect-error - It`s ok.
                        const details = await movieAPI.getInfoMovie(item.id);
                        return {
                            title: item.title,
                            revenue: details.data.revenue,
                            img: details.data.backdrop_path,
                            budget: details.data.budget,
                        };
                    })
                );
                return {data: boxOfficeData}

            } catch (e) {
                rejectWithValue(e)
            }
        }, {
            fulfilled: (state, action) => {
                if(action.payload?.data) {
                    state.movies = action.payload.data
                }
            }
        })
    })
})

export const BoxOfficeReducer = BoxOfficeSlice.reducer;
export const { fetchBoxOfficeTC } = BoxOfficeSlice.actions;
export const { BoxOfficeSelector,  BoxOfficeLoadedSelector } = BoxOfficeSlice.selectors;
