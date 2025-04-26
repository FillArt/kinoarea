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
            backgroundRepeat: 'no-repeat'}} className="tabletLg:h-[772px] tablet:h-[566px] phone:h-[439px] h-[368px] rounded-[10px] tabletLg:px-[37px] tablet:px-[23px] tabletLg:pt-[37px] tabletLg:pb-[50px] tablet:py-[27px] phone:p-[23px] px-[23px] py-[13px] flex justify-between flex-col">
            <FirstNewsInfo date={item && t(item.date)} view={item?.view} commentsCount={item?.commentsCount} />

            <div className="max-w-[906px] ">
                <h3 className="tabletLg:text-[45px] tablet:text-[35px] phone:text-[30px] text-[20px] font-bold hover:text-[#3657CB] cursor-pointer">{item && t(item.title)}</h3>
                <p className="tabletLg:text-[20px] tablet:text-[18px] text-[16px] phone:block hidden">{item && t(item.description)}</p>
            </div>
        </div>
    );
};