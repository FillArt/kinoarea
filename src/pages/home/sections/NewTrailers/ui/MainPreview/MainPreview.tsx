import {MainPlayer} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPlayer/MainPlayer.tsx";
import {MainPoster} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPoster/MainPoster.tsx";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {newTrailersMainSelector} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {MainInfo} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainInfo/MainInfo.tsx";


type MainPreviewProps = {
    videoMod: boolean;
    setVideoMod: (status: boolean) => void;
}

export const MainPreview = ({videoMod, setVideoMod}: MainPreviewProps) => {

    const trailerMain = useAppSelector(newTrailersMainSelector)

    return (
        <article className="mb-[-14px] ">

            {videoMod ? (
                <MainPlayer stop={setVideoMod} trailerUrl={trailerMain.trailer.url}/>
            ) : (
                <MainPoster posterUrl={trailerMain.posterUrl} setVideoMod={setVideoMod}/>
            )}

            <MainInfo title={trailerMain.trailer.name} likes={3245} dislikes={420}/>
        </article>
    );
};