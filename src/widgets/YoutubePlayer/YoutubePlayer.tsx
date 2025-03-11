import YouTube from "react-youtube";
import IconPlay from "@/widgets/YoutubePlayer/assets/play.svg"
import {TrailerType} from "@/shared/types/MovieType.ts";
import {YoutubeInfo} from "@/widgets/YoutubePlayer/YoutubeInfo.tsx";

type YoutubePlayerProps = {
    trailer: TrailerType
    mode: boolean,
    setMod: (status: boolean) => void;
}

const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 1,
        modestbranding: 1,
    },
};

export const YoutubePlayer = ({trailer, mode, setMod}: YoutubePlayerProps) => {
    const handleVideoEnd = () => setMod(false);

    return (
        <>
            {mode ? (
                <div className="tabletLg:h-[760px] tablet:h-[455px] phone:h-[350px] h-[196px] w-full">
                    <YouTube className="w-full h-full" videoId={trailer.trailer.url} opts={opts} onEnd={handleVideoEnd}/>
                </div>
            ) : (
                <div className="relative cursor-pointer group" onClick={() => setMod(true)}>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <img
                            className="tabletLg:w-[60px] tabletLg:h-[60px] tablet:w-[44px] tablet:h-[44px] phone:w-[34px] phone:h-[34px] w-[22px] h-[22px]"
                            src={IconPlay} alt=""/>
                    </div>

                    <div
                        className="absolute w-full h-full duration-300 bg-formElementColor bg-opacity-65 hidden group-hover:flex items-center justify-center rounded-[10px]"></div>

                    <img className="w-full object-cover rounded-[10px] max-h-[760px]" src={trailer.posterUrl}
                         alt="trailerMain?.trailer.name"/>
                </div>
            )}

            <YoutubeInfo trailer={trailer} />
        </>
    );
};