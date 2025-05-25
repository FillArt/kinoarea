import {useParams} from "react-router-dom";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {ShareContent} from "@/widgets/YoutubePlayer/ShareContent/ShareContent.tsx";
import {BreadcrumbInfo} from "@/pages/movie/sections/Info/ui/BreadcrumbInfo.tsx";
import {TitleInfo} from "@/pages/movie/sections/Info/ui/TitleInfo.tsx";
import {useGetMovieInfo} from "@/shared/api/movies/hooks/useGetMovieInfo.ts";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {RatingCircle} from "@/shared/ui/cards/CardMovie/Rating/RatingCircle.tsx";
import {truncateString} from "@/shared/helpers/truncateString.ts";


export const Info = () => {

    const {id} = useParams();
    const info = useGetMovieInfo(Number(id))
    const breakpoint = useBreakpoint()

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
            <div
                className="flex phone:flex-row flex-col items-center phone:gap-[50px] gap-[46px] text-white tabletLg:my-[47px] my-[36px]">
                <div className="flex flex-col justify-start phone:w-auto w-full">

                    {breakpoint === 'phone' && (
                        <div>
                            <BreadcrumbInfo category={categories[0].name} title={title}/>
                            <h1 className="tabletLg:text-[65px] phone:text-[40px] text-[32px] font-black leading-none max-w-[630px] tabletLg:mb-[10px] mb-[3px]">{title}</h1>
                            <h2 className="tabletLg:text-[25px] text-[20px] font-medium mb-[18px]">{original_title}</h2>
                        </div>
                    )}


                    <div className="flex gap-[50px]">
                        <img
                            className="tabletLg:max-w-[395px] phone:max-w-[297px] max-w-[230px] tabletLg:max-h-[539px] phone:max-h-[402px] table:max-w-[310px] rounded-[10px]"
                            src={`https://image.tmdb.org/t/p/w500/${poster}`}
                            alt={`${title} movie poster`}/>

                        {breakpoint === 'phone' && <RatingCircle name="IMDb" rating={rating}/>}
                    </div>

                    {breakpoint === 'phone' && <p className="tabletLg:text-[20px] text-[15px] mt-[23px]">{truncateString(description, 256)}</p>}

                </div>
                <div>
                    {breakpoint !== 'phone' && (
                        <div>
                            <BreadcrumbInfo category={categories[0].name} title={title}/>
                            <TitleInfo
                                title={title}
                                original_title={original_title}
                                vote_average={rating}
                                overview={description}/>
                        </div>
                    )}

                    <div className="flex phone:flex-row flex-col items-center phone:gap-[37px] gap-[26px]">
                        <ButtonBase onClick={() => {}} style="border" title="Смотреть трейлер"/>
                        <ShareContent url={`https://fillart.github.io/kinoarea/#/movie/${id}`}/>
                    </div>

                </div>
            </div>


            <div className="flex flex-col gap-[47px] mb-[47px]">
                <div className="flex flex-wrap gap-y-[20px] gap-x-[40px]">
                    {general.map((item) => (
                        <div
                            key={item.label}
                            className="flex w-full phone:w-[calc(50%-20px)] text-[16px] tabletLg:text-[18px]"
                        >
                            <div className="phone:w-[150px] w-[120px] font-semibold text-white">{item.label}</div>
                            <div className="flex-1 text-decorTextColor">
                    <span>
                        {item?.value
                            ? Array.isArray(item.value)
                                ? item.value.join(", ")
                                : item.value
                            : "-"}
                    </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};
