import {RestNewsItem} from "@/pages/home/sections/News/ui/RestNews/RestNewsItem.tsx";
import {NewsType} from "@/pages/home/sections/News/model/NewsSlice.ts";

type RestNewsItemProps = {
    items: NewsType[]
}

export const RestNewsList = ({ items }: RestNewsItemProps) => {
    return (
        <div className="flex flex-col gap-[23px]">
            {items.map((item, index) => (
                <RestNewsItem item={item} key={index} />
            ))}
        </div>
    );
};