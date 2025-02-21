import {trailerType} from "@/pages/HomePage/sections/NewTrailers/ui/NewTrailers.tsx";
import {MainInfo} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainInfo/MainInfo.tsx";

type MainPreviewProps = {
    trailerMain: trailerType | undefined;
}

export const MainPreview = ({trailerMain}: MainPreviewProps) => {

    return (
        <article>
            <div>
                <img className="w-full rounded-[10px]" src={trailerMain?.posterUrl} alt="trailerMain?.trailer.name"/>
            </div>

            <MainInfo title={trailerMain?.trailer.name} likes={3245} dislikes={420} />
        </article>
    );
};