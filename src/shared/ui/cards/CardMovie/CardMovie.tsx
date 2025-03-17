import {Empty} from "@/shared/ui/cards/CardMovie/Empty/Empty.tsx";
import {Rating} from "@/shared/ui/cards/CardMovie/Rating/Rating.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {MovieType} from "@/shared/types/MovieType.ts";

export type CardMovieProps = {
    movie: MovieType
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
                    className="absolute inset-0 bg-formElementColor bg-opacity-0 group-hover:bg-opacity-65
                    flex items-center justify-center rounded-[10px] transition-all duration-300 ease-in-out">
                    <ButtonBase title="Карточка фильма" onClick={() => alert('Переход на страницу...')}
                                style="card"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    />
                </div>

                <Rating rating={rounded(vote_average, 1)}/>
                {!poster_path && <Empty/>}
            </div>

            <h3 className="tabletLg:text-smallFontSize text-[15px] mt-2 mb-1">{title}</h3>

            {genres && genres.map((genre: string, index: number) => (
                <span key={index}>
                    <a className="inline-block text-decorTextColor tabletLg:text-[15px] text-[12px]" href="/public">{genre}</a>
                    {index < genres.length - 1 && <span>,  </span>}
                </span>
            ))}
        </div>
    );
};
