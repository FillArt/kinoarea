import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {
    newTrailersLoadedSelector,
    newTrailersMainSelector
} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {YoutubePlayerSkeleton} from "@/widgets/YoutubePlayer/YoutubePlayerSkeleton.tsx";
import {YoutubePlayer} from "@/widgets/YoutubePlayer/YoutubePlayer.tsx";



type MainPreviewProps = {
    videoMod: boolean;
    setVideoMod: (status: boolean) => void;
}

export const MainPreview = ({videoMod, setVideoMod}: MainPreviewProps) => {
    const trailerMain = useAppSelector(newTrailersMainSelector)
    const isLoaded = useAppSelector(newTrailersLoadedSelector)

    if (!isLoaded || !trailerMain) {
        return <YoutubePlayerSkeleton />
    }

    return (
        <article className="mb-[-14px] ">
            <YoutubePlayer trailer={trailerMain} mode={videoMod} setMod={setVideoMod}  />
        </article>
    );
};