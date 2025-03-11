import YouTube from "react-youtube";

type MainPlayerProps = {
    stop: (status: boolean) => void;
    trailerUrl: string | undefined;
}

export const MainPlayer = ({stop, trailerUrl}: MainPlayerProps) => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            // mute: 1,
            controls: 1,
            modestbranding: 1,
        },
    };
    const handleVideoEnd = () => {
        stop(false)
    };

    return (
        <div className="tabletLg:h-[760px] tablet:h-[455px] phone:h-[350px] h-[196px] w-full">
            <YouTube className="w-full h-full" videoId={trailerUrl} opts={opts} onEnd={handleVideoEnd} />
        </div>
    );
};