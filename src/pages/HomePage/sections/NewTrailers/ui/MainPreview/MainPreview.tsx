import {trailerType} from "@/pages/HomePage/sections/NewTrailers/ui/NewTrailers.tsx";

import {MainInfo} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainInfo/MainInfo.tsx";
import {MainPlayer} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainPlayer/MainPlayer.tsx";
import {MainPoster} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainPoster/MainPoster.tsx";

type MainPreviewProps = {
    trailerMain: trailerType | undefined;
    videoMod: boolean;
    setVideoMod: (status: boolean) => void;
}

export const MainPreview = ({trailerMain, videoMod, setVideoMod}: MainPreviewProps) => {
    return (
        <article className="mb-[-14px] ">

            {videoMod ? (
                <MainPlayer stop={setVideoMod} trailerUrl={trailerMain?.trailer.url}/>
            ) : (
                <MainPoster posterUrl={trailerMain?.posterUrl} setVideoMod={setVideoMod}/>
            )}

            <MainInfo title={trailerMain?.trailer.name} likes={3245} dislikes={420}/>
        </article>
    );
};