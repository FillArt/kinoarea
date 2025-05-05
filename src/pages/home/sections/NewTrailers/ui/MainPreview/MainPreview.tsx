import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {newTrailersMainSelector} from "@/pages/home/sections/NewTrailers/model/NewTrailersSlice.ts";
import {YoutubePlayerSkeleton} from "@/widgets/YoutubePlayer/YoutubePlayerSkeleton.tsx";
import {YoutubePlayer} from "@/widgets/YoutubePlayer/YoutubePlayer.tsx";


type MainPreviewProps = {
    videoMod: boolean;
    setVideoMod: (status: boolean) => void;
    isLoading: boolean
}

export const MainPreview = ({videoMod, setVideoMod, isLoading }: MainPreviewProps) => {
    const trailerMain = useAppSelector(newTrailersMainSelector)

    if (isLoading || !trailerMain) {
        return <YoutubePlayerSkeleton />
    }

    return (
        <article className="mb-[-14px] ">
            <YoutubePlayer trailer={trailerMain} mode={videoMod} setMod={setVideoMod}  />
        </article>
    );
};