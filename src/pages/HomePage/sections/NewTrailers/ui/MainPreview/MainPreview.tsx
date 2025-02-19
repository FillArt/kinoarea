import {trailerType} from "@/pages/HomePage/sections/NewTrailers/ui/NewTrailers.tsx";

type MainPreviewProps = {
    trailerMain: trailerType;
}

export const MainPreview = ({trailerMain}: MainPreviewProps) => {

    return (
        <article>
            <div>
                <img className="w-full rounded-[10px]" src={trailerMain?.posterUrl} alt=""/>
            </div>
        </article>
    );
};