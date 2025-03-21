import EyeIcon from "@/pages/home/sections/News/ui/FirstNews/FirstNewsInfo/assets/eye.svg";
import CommentIcon from "@/pages/home/sections/News/ui/FirstNews/FirstNewsInfo/assets/comment.svg";

type FirstNewsInfo = {
    date: string | undefined
    view: number | undefined
    commentsCount: number | undefined
}

export const FirstNewsInfo = ({ date, view, commentsCount }: FirstNewsInfo) => {
    return (
        <div className="text-[15px] flex gap-[15px]">
            <span>{date}</span>
            <div className="flex gap-[7px] items-center">
                <img src={EyeIcon} alt=""/>
                <span>{view}</span>
            </div>
            <div className="flex gap-[6px] items-center">
                <img src={CommentIcon} alt=""/>
                <span>{commentsCount}</span>
            </div>
        </div>
    );
};