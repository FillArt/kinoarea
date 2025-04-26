import {NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {useTranslation} from "react-i18next";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";

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
            className="rounder-[10px] group relative h-[175px] tabletLg:px-[18px] px-[15px] tabletLg:pt-[11px] pt-[9px] tabletLg:pb-[26px] pb-[15px] rounded-[10px] flex flex-col justify-between w-full">
            <div>
                <span className="text-[15px] font-bold">{item && t(item.date)}</span>
            </div>
            <div>
                <h3 className="tabletLg:text-[18px] text-[15px] font-bold">{item && t(item.title)}</h3>
            </div>
            <div
                className="absolute inset-0 bg-formElementColor bg-opacity-0 group-hover:bg-opacity-65
                    flex items-center justify-center rounded-[10px] transition-all duration-300 ease-in-out cursor-pointer">
                <ButtonBase title={"Read"} onClick={() => alert('Переход на страницу...')}
                            style="card"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
            </div>
        </div>
    );
};