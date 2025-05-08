import {useState} from "react";
import {TrailerType} from "@/shared/api/movies/movieType.ts";
import {truncateString} from "@/shared/helpers/truncateString.ts";
import {ShareContent} from "@/widgets/YoutubePlayer/ShareContent/ShareContent.tsx";

type YouTubeInfoProps = {
    trailer: TrailerType
}

export const YoutubeInfo = ({trailer}: YouTubeInfoProps) => {

    return (
        <div>
            <div
                className="flex tabletLg:mt-[26px] table:mt-[18px] mt-[10px] w-full tabletLg:items-baseline justify-between">
                <div
                    className="tabletLg:text-[45px] table:text-[35px] phone:text-[30px] text-[25px] font-bold max-w-[750px]">
                    <h3>{truncateString(trailer.trailer.name, 50)}</h3>
                </div>

                <div className="flex items-center gap-[8px]">
                    <ShareContent />
                </div>
            </div>
        </div>
    );
};
