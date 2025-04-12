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
            backgroundRepeat: 'no-repeat'}} className="tabletLg:h-[772px] h-[566px] rounded-[10px] tabletLg:px-[37px] px-[23px] tabletLg:pt-[37px] tabletLg:pb-[50px] py-[27px] flex justify-between flex-col">
            <FirstNewsInfo date={item && t(item.date)} view={item?.view} commentsCount={item?.commentsCount} />

            <div className="max-w-[906px] ">
                <h3 className="tabletLg:text-[45px] text-[35px] font-bold">{item && t(item.title)}</h3>
                <p className="tabletLg:text-[20px] text-[18px]">{item && t(item.description)}</p>
            </div>
        </div>
    );
};