import {useState} from "react";
import {TrailerType} from "@/shared/types/MovieType.ts";
import {LikesOrDislikes} from "@/widgets/YoutubePlayer/LikesOrDislikes.tsx";
import {truncateString} from "@/shared/helpers/truncateString.ts";

type YouTubeInfoProps = {
    trailer: TrailerType
}

export const YoutubeInfo = ({trailer}: YouTubeInfoProps) => {
    const [likesLocal, setLikesLocal] = useState<number>(0);
    const [dislikesLocal, setDislikesLocal] = useState<number>(0);


    return (
        <div>
            <div
                className="flex tabletLg:mt-[26px] table:mt-[18px] mt-[10px] w-full tabletLg:items-baseline justify-between">
                <div
                    className="tabletLg:text-[45px] table:text-[35px] phone:text-[30px] text-[25px] font-bold max-w-[750px]">
                    <h3>{truncateString(trailer.trailer.name, 50)}</h3>
                </div>

                <div className="flex items-center gap-[8px]">
                    <LikesOrDislikes type="like" digital={likesLocal}
                                     onClick={() => setLikesLocal(likesLocal => likesLocal + 1)}/>
                    <LikesOrDislikes type="dislike" digital={dislikesLocal}
                                     onClick={() => setDislikesLocal(dislikesLocal => dislikesLocal + 1)}/>
                </div>
            </div>
        </div>
    );
};
