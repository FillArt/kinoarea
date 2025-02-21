import {Empty} from "@/common/components/cards/CardMovie/Empty/Empty.tsx";
import {Rating} from "@/common/components/cards/CardMovie/Rating/Rating.tsx";
import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";
import {NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";

export type CardMovieProps = {
    movie: NowInCinemaType
}

export const CardMovie = (item: CardMovieProps) => {

    const {title, vote_average, poster_path, genres} = item.movie;

    const rounded = (num: number, decimals: number) => Number(num.toFixed(decimals));

    const imgStyle = poster_path ? {
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    } : {}

    return (
        <div className="group relative max-w-[340px] ">
            <div
                style={imgStyle}
                className="bg-emptyColor tabletLg:h-[470px] h-[286px] relative flex justify-center items-center rounded-[10px]">

                <div
                    className="absolute w-full h-full duration-300 bg-formElementColor bg-opacity-65 hidden group-hover:flex items-center justify-center rounded-[10px]">
                    <ButtonBase title="Карточка фильма" onClick={() => alert('Переход на страницу...')}
                                style="card"/>
                </div>

                <Rating rating={rounded(vote_average, 1)}/>
                {!poster_path && <Empty/>}
            </div>

            <h3 className="tabletLg:text-smallFontSize text-[15px] mt-2 mb-1">{title}</h3>

            {genres && genres.map((genre: string, index: number) => (
                <span key={index}>
                    <a className="inline-block text-decorTextColor tabletLg:text-[15px] text-[12px]" href="/">{genre}</a>
                    {index < genres.length - 1 && <span>,  </span>}
                </span>
            ))}
        </div>
    );
};
