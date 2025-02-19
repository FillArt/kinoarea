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
            <div className="flex w-full items-center justify-between">
                <div className="mt-[26px] text-[40px] max-w-2xl">
                    <h2>{title}</h2>
                </div>

                <div className="flex items-center gap-[8px]">
                    <LikesOrDislikes type="like" digital={likesLocal} onClick={() => setLikesLocal(likesLocal => likesLocal + 1)} />
                    <LikesOrDislikes type="dislike" digital={dislikesLocal} onClick={() => setDislikesLocal(dislikesLocal => dislikesLocal + 1)} />
                </div>
            </div>
        </div>
    );
};