import {NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {FirstNewsInfo} from "@/pages/home/sections/News/ui/FirstNews/FirstNewsInfo/FirstNewsInfo.tsx";
import {useTranslation} from "react-i18next";

type FirstNewsProps = {
    item: NewsType | undefined
}

export const FirstNews = ({item}: FirstNewsProps) => {

    const {t} = useTranslation('news')

    return (
        <div style={{ backgroundImage: `url(${item?.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}} className="tabletLg:h-[772px] tablet:h-[566px] h-[439px] rounded-[10px] tabletLg:px-[37px] tablet:px-[23px] tabletLg:pt-[37px] tabletLg:pb-[50px] tablet:py-[27px] p-[23px] flex justify-between flex-col">
            <FirstNewsInfo date={item && t(item.date)} view={item?.view} commentsCount={item?.commentsCount} />

            <div className="max-w-[906px] ">
                <h3 className="tabletLg:text-[45px] tablet:text-[35px] text-[30px] font-bold">{item && t(item.title)}</h3>
                <p className="tabletLg:text-[20px] tablet:text-[18px] text-[16px]">{item && t(item.description)}</p>
            </div>
        </div>
    );
};