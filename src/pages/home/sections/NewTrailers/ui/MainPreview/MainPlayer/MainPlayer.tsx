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
            autoplay: 1,    // Автозапуск
            // mute: 1,        // Отключить звук
            controls: 1,    // Показывать элементы управления
            modestbranding: 1, // Минимизировать логотип YouTube
        },
    };
    const handleVideoEnd = () => {
        stop(false)
        // Ваш код для обработки окончания видео
    };

    return (
        <div className="tabletLg:h-[760px] tablet:h-[455px] phone:h-[350px] h-[196px] w-full">
            <YouTube className="w-full h-full" videoId={trailerUrl} opts={opts} onEnd={handleVideoEnd} />
        </div>
    );
};