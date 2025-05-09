import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {NewsSelector, NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {useEffect, useState} from "react";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {FirstNews} from "@/pages/home/sections/News/ui/FirstNews/FirstNews.tsx";
import {RestNewsList} from "@/pages/home/sections/News/ui/RestNews/RestNewsList.tsx";
import {useTranslation} from "react-i18next";
import ArrowIcon from "@/pages/home/sections/NewTrailers/assets/arrow.svg";
import {Section} from "@/shared/ui/sections/Section.tsx";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";


export const News = () => {
    const news = useAppSelector(NewsSelector)
    const {t} = useTranslation('news');
    const breakpoint = useBreakpoint()

    const [firstNews, setFirstNews] = useState<NewsType>()
    const [restNews, setRestNews] = useState<NewsType[]>([])

    useEffect(() => {
        const first = news[0];
        let count = 4

        if (breakpoint === "phone") count = 2
        else if (breakpoint === "tablet") count = 3

        const rest = news.slice(1, count + 1)

        setFirstNews(first);
        setRestNews(rest);
    }, [news, breakpoint]);

    return (
        <Section>
            <SectionTitle title={t('title')} line={false} sectionVersion="two">
                <a className="group  hover:text-[#3657CB] tabletLg:text-[22px] text-[18px] flex items-center" href="/">
                    {t('title_all')}
                    <img src={ArrowIcon} alt="Стрелка" className="group-hover:animate-bounce-x tabletLg:ml-[27px] ml-[14px] w-6 h-6"/>
                </a>
            </SectionTitle>

            <div className="grid grid-cols-12 gap-[23px] tabletLg:mt-[63px] mt-[30px]">
                <div className="tabletLg:col-span-10 col-span-12">
                    <FirstNews item={firstNews}/>
                </div>

                <div className="tabletLg:col-span-2 col-span-12">
                    <RestNewsList items={restNews}/>
                </div>
            </div>
        </Section>
    );
};