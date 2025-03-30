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
            className="rounder-[10px] h-[175px] px-[18px] pt-[11px] pb-[26px] rounded-[10px] flex flex-col justify-between">
            <div>
                <span className="text-[15px] font-bold">{item && t(item.date)}</span>
            </div>
            <div>
                <h3 className="text-[18px] font-bold">{item && t(item.title)}</h3>
            </div>
        </div>
    );
};