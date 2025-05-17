import {MovieMainInfo} from "@/shared/api/movies/movieType.ts";
import {useParams} from "react-router-dom";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {ShareContent} from "@/widgets/YoutubePlayer/ShareContent/ShareContent.tsx";
import {BreadcrumbInfo} from "@/pages/movie/sections/Info/ui/BreadcrumbInfo.tsx";
import {TitleInfo} from "@/pages/movie/sections/Info/ui/TitleInfo.tsx";

type InfoProps = {
    info: MovieMainInfo
}

export const Info = ({info}: InfoProps) => {

    const {poster_path, title, original_title, vote_average, genres, overview} = info
    const { id } = useParams();

    return (
        <div className="container mx-auto max-w-[1163px] mt-[47px]">
            <div className="flex items-center gap-[50px] text-white">
                <img
                    className="max-w-[395px] max-h-[539px] rounded-[10px]"
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`${title} movie poster`}/>

                <div className="mb-[3px]">

                    <BreadcrumbInfo category={genres[0].name} title={title} />
                    <TitleInfo
                        title={title}
                        original_title={original_title}
                        vote_average={vote_average}
                        overview={overview}  />

                    <div className="flex items-center gap-[37px]">
                        <ButtonBase onClick={() => {}} style="border" title="Смотреть трейлер" />
                        <ShareContent url={`https://fillart.github.io/kinoarea/#/movie/${id}`} />
                    </div>
                </div>

            </div>
        </div>
    );
};
