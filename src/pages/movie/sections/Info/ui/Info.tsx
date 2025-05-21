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
            <div className="flex items-center gap-[50px] text-white tabletLg:my-[47px] my-[36px]">
                <img
                    className="tabletLg:max-w-[395px] max-w-[297px] tabletLg:max-h-[539px] max-h-[402px] rounded-[10px]"
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
                <div className="col-span-12 grid grid-cols-2 gap-y-[20px] gap-x-[40px]">
                    {general.map((item) => (
                        <div key={item.label} className="grid grid-cols-[150px_1fr] tabletLg:text-[18px] text-[16px]">
                            <div className="font-semibold text-white">{item.label}</div>
                            <div className={`text-decorTextColor`}>
                                {item?.value
                                    ? Array.isArray(item.value)
                                        ? item.value.join(", ")
                                        : item.value
                                    : "-"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
