import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {NewsSelector} from "@/pages/home/sections/News/model/NewsSlice.ts";


export const News = () => {

    const news = useAppSelector(NewsSelector)
    console.log(news)

    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                <h1>News</h1>
            </div>
        </section>
    );
};