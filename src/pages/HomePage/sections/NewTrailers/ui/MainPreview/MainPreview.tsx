import {trailerType} from "@/pages/HomePage/sections/NewTrailers/ui/NewTrailers.tsx";
import {MainInfo} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainInfo/MainInfo.tsx";

import IconPlay from "../assets/play.svg"
import {MainPlayer} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainPlayer/MainPlayer.tsx";

type MainPreviewProps = {
    trailerMain: trailerType | undefined;
    videoMod: boolean;
    setVideoMod: (status: boolean) => void;
}

export const MainPreview = ({trailerMain, videoMod, setVideoMod}: MainPreviewProps) => {
    console.log(trailerMain);



    return (
        <article className="mb-[23px] ">

            {videoMod ? (
                <MainPlayer stop={setVideoMod} trailerUrl={trailerMain?.trailer.url} />
            ) : (
                <div className="relative cursor-pointer" onClick={() => setVideoMod(true)}>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img src={IconPlay} alt=""/>
                    </div>
                    <img className="w-full object-cover rounded-[10px] max-h-[750px]" src={trailerMain?.posterUrl}
                         alt="trailerMain?.trailer.name"/>
                </div>
            )}


            <MainInfo title={trailerMain?.trailer.name} likes={3245} dislikes={420}/>
        </article>
    );
};