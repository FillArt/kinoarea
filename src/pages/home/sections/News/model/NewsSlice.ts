import {createAppSlice} from "@/shared/hooks/createAppSlice.ts";

import one from "../assets/fake/1.png"
import two from "../assets/fake/2.png"
import three from "../assets/fake/3.png"
import four from "../assets/fake/4.png"
import five from "../assets/fake/5.png"

export type NewsType = {
    id: number,
    title: string,
    img: string,
    description: string,
    date: string,
    view: number,
    commentsCount: number,
    comments: []
}

export const NewsSlice = createAppSlice({
    name: 'News',
    initialState: {
        news: [
            {
                id: 1,
                title: "post_title_1",
                img: one,
                description: "post_subtitle",
                date: "date",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 2,
                title: "post_title_2",
                img: two,
                description: "post_subtitle",
                date: "date",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 3,
                title: "post_title_1",
                img: five,
                description: "post_subtitle",
                date: "date",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 4,
                title: "post_title_3",
                img: three,
                description: "post_subtitle",
                date: "date",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 5,
                title: "post_title_4",
                img: four,
                description: "post_subtitle",
                date: "date",
                view: 242,
                commentsCount: 14,
                comments: []
            },
        ] as NewsType[]
    },
    selectors: {
        NewsSelector: state => state.news
    },
    reducers: create => ({
        test: create.reducer(() => {})
    }),
})

export const NewsSliceReducer = NewsSlice.reducer
export const {test} = NewsSlice.actions
export const {NewsSelector} = NewsSlice.selectors