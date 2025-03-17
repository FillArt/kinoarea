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
                title: "Не время умирать. Перенос релиза фильма",
                img: one,
                description: "Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.",
                date: "15 Апр 2020",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 2,
                title: "Как изменили Соника с последнего анонса ",
                img: two,
                description: "Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.",
                date: "15 Апр 2020",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 3,
                title: "Перенос релиза фильма",
                img: five,
                description: "Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.",
                date: "15 Апр 2020",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 4,
                title: "От этой новости вы будете шокированы",
                img: three,
                description: "Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.",
                date: "15 Апр 2020",
                view: 242,
                commentsCount: 14,
                comments: []
            },
            {
                id: 5,
                title: "Вот это, конечно, да!",
                img: four,
                description: "Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.",
                date: "15 Апр 2020",
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
        test: create.reducer(() => {
        })
    }),
})

export const NewsSliceReducer = NewsSlice.reducer
export const {test} = NewsSlice.actions
export const {NewsSelector} = NewsSlice.selectors