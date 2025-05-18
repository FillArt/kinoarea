import {useParams} from "react-router-dom";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {ShareContent} from "@/widgets/YoutubePlayer/ShareContent/ShareContent.tsx";
import {BreadcrumbInfo} from "@/pages/movie/sections/Info/ui/BreadcrumbInfo.tsx";
import {TitleInfo} from "@/pages/movie/sections/Info/ui/TitleInfo.tsx";
import {useGetMovieInfo} from "@/shared/api/movies/hooks/useGetMovieInfo.ts";


export const Info = () => {

    const { id } = useParams();
    const info = useGetMovieInfo(Number(id))

    if (!info) {
        return <div className="text-white text-center mt-10">Загрузка...</div>;
    }

    const {
        title,
        original_title,
        description,
        poster,
        general,
        categories,
        rating
    } = info

    console.log(general)


    return (
        <section className="container mx-auto max-w-[1163px]">
            <div className="flex items-center gap-[50px] text-white my-[47px]">
                <img
                    className="max-w-[395px] max-h-[539px] rounded-[10px]"
                    src={`https://image.tmdb.org/t/p/w500/${poster}`}
                    alt={`${title} movie poster`}/>

                <div>
                    <BreadcrumbInfo category={categories[0].name} title={title} />
                    <TitleInfo
                        title={title}
                        original_title={original_title}
                        vote_average={rating}
                        overview={description}  />

                    <div className="flex items-center gap-[37px]">
                        <ButtonBase onClick={() => {}} style="border" title="Смотреть трейлер" />
                        <ShareContent url={`https://fillart.github.io/kinoarea/#/movie/${id}`} />
                    </div>
                </div>
            </div>


             <div className="grid grid-cols-12 gap-[63px] mb-[47px]">
                 <div className="col-span-6 flex gap-[20px] flex-col">
                     {general.map((item) => (
                         <div className="flex text-[18px] ">
                             <div className="min-w-[150px] font-semibold text-white">{item.label}</div>
                             <div className="underline text-decorTextColor">
                                 {Array.isArray(item.value) ? item.value.join(", ") : item.value}
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};
