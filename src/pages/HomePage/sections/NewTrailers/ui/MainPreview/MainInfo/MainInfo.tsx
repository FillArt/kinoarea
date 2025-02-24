import {useState} from "react";
import {
    LikesOrDislikes
} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainInfo/LikesOrDislikes/LikesOrDislikes.tsx";


type MainInfoProps = {
    title: string | undefined;
    likes: number | undefined;
    dislikes: number | undefined;
}

export const MainInfo = ({title, likes = 0, dislikes = 0}: MainInfoProps) => {

    const [likesLocal, setLikesLocal] = useState<number>(likes);
    const [dislikesLocal, setDislikesLocal] = useState<number>(dislikes);

    return (
        <div>
            <div className="flex tabletLg:mt-[26px] table:mt-[18px] mt-[10px] w-full tabletLg:items-baseline justify-between">
                <div className="tabletLg:text-[45px] table:text-[35px] phone:text-[30px] text-[25px] font-bold max-w-[750px]">
                    <h3>{title}</h3>
                </div>

                <div className="flex items-center gap-[8px]">
                    <LikesOrDislikes type="like" digital={likesLocal} onClick={() => setLikesLocal(likesLocal => likesLocal + 1)} />
                    <LikesOrDislikes type="dislike" digital={dislikesLocal} onClick={() => setDislikesLocal(dislikesLocal => dislikesLocal + 1)} />
                </div>
            </div>
        </div>
    );
};