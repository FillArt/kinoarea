import IconPlay from "@/pages/HomePage/sections/NewTrailers/ui/assets/play.svg";


type MainPosterProps = {
    posterUrl: string | undefined;
    setVideoMod: (status: boolean) => void;
}

export const MainPoster = ({setVideoMod, posterUrl}: MainPosterProps) => {
    return (
        <div className="relative cursor-pointer" onClick={() => setVideoMod(true)}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={IconPlay} alt=""/>
            </div>
            <img className="w-full object-cover rounded-[10px] max-h-[760px]" src={posterUrl}
                 alt="trailerMain?.trailer.name"/>
        </div>
    );
};