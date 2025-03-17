import {NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";
import {FirstNewsInfo} from "@/pages/home/sections/News/ui/FirstNews/FirstNewsInfo/FirstNewsInfo.tsx";

type FirstNewsProps = {
    item: NewsType | undefined
}

export const FirstNews = ({item}: FirstNewsProps) => {

    console.log(item)

    return (
        <div style={{ background: `url(${item?.img})` }} className="h-[772px] rounded-[10px] px-[37px] pt-[37px] pb-[50px] flex justify-between flex-col">
            <FirstNewsInfo date={item?.date} view={item?.view} commentsCount={item?.commentsCount} />

            <div className="max-w-[906px] ">
                <h3 className="text-[45px] font-bold">{item?.title}</h3>
                <p className="text-[20px]">{item?.description}</p>
            </div>
        </div>
    );
};