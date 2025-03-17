import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {NewsSelector, NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {useEffect, useState} from "react";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {FirstNews} from "@/pages/home/sections/News/ui/FirstNews/FirstNews.tsx";


export const News = () => {

    const news = useAppSelector(NewsSelector)

    const [firstNews, setFirstNews] = useState<NewsType>()
    const [restNews, setRestNews] = useState<NewsType[]>([])

    useEffect(() => {
        const first = news[0];
        const rest = news.slice(1);

        setFirstNews(first);
        setRestNews(rest);
    }, [news]);

    console.log(news)

    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                <SectionTitle title="Последние новости" line={false}>
                    Все новости
                </SectionTitle>

                <div className="grid grid-cols-12 gap-[23px] tabletLg:mt-[63px] mt-[30px]">
                    <div className="tablet:col-span-10">
                        <FirstNews item={firstNews} />
                    </div>

                    <div className="tablet:col-span-2">
                        <div className="outline outline-amber-700"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};