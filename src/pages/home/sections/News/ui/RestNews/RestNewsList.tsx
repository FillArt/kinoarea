import {RestNewsItem} from "@/pages/home/sections/News/ui/RestNews/RestNewsItem.tsx";
import {NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";

type RestNewsItemProps = {
    items: NewsType[]
}

export const RestNewsList = ({ items }: RestNewsItemProps) => {
    return (
        <div className="flex tabletLg:flex-col tabletLg:gap-[23px] gap-[9px]">
            {items.map((item, index) => (
                <RestNewsItem item={item} key={index} />
            ))}
        </div>
    );
};