import {trailerType} from "@/pages/home/sections/NewTrailers/ui/NewTrailers.tsx";
import {MainPlayer} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPlayer/MainPlayer.tsx";
import {MainPoster} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPoster/MainPoster.tsx";
import {MainInfo} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainInfo/MainInfo.tsx";


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