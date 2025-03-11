import IconPlay from "@/pages/home/sections/NewTrailers/ui/assets/play.svg";


type MainPosterProps = {
    posterUrl: string | undefined;
    setVideoMod: (status: boolean) => void;
}

export const MainPoster = ({setVideoMod, posterUrl}: MainPosterProps) => {
    return (
        <div className="relative cursor-pointer group" onClick={() => setVideoMod(true)}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <img className="tabletLg:w-[60px] tabletLg:h-[60px] tablet:w-[44px] tablet:h-[44px] phone:w-[34px] phone:h-[34px] w-[22px] h-[22px]" src={IconPlay} alt=""/>
            </div>

            <div
                className="absolute w-full h-full duration-300 bg-formElementColor bg-opacity-65 hidden group-hover:flex items-center justify-center rounded-[10px]">
            </div>

            <img className="w-full object-cover rounded-[10px] max-h-[760px]" src={posterUrl}
                 alt="trailerMain?.trailer.name"/>
        </div>
    );
};