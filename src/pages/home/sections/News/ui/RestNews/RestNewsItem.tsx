import {NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {useTranslation} from "react-i18next";

type RestNewsItemProps = {
    item: NewsType
}

export const RestNewsItem = ({item}: RestNewsItemProps) => {
    const {t} = useTranslation('news');

    return (
        <div style={{ backgroundImage: `url(${item?.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}
            className="rounder-[10px] h-[175px] tabletLg:px-[18px] px-[15px] tabletLg:pt-[11px] pt-[9px] tabletLg:pb-[26px] pb-[15px] rounded-[10px] flex flex-col justify-between w-full">
            <div>
                <span className="text-[15px] font-bold">{item && t(item.date)}</span>
            </div>
            <div>
                <h3 className="tabletLg:text-[18px] text-[15px] font-bold">{item && t(item.title)}</h3>
            </div>
        </div>
    );
};