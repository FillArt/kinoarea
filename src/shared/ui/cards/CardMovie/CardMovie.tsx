import {Empty} from "@/shared/ui/cards/CardMovie/Empty/Empty.tsx";
import {Rating} from "@/shared/ui/cards/CardMovie/Rating/Rating.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {MovieType} from "@/shared/types/MovieType.ts";
import {formatDate} from "@/shared/helpers/formatDate.ts";
import {useTranslation} from "react-i18next";

export type CardMovieProps = {
    movie: MovieType,
    release_date?: string | null
}

export const CardMovie = ({movie, release_date}: CardMovieProps) => {

    const {title, vote_average, poster_path, genres} = movie;
    const {t} = useTranslation('cards');

    const rounded = (num: number, decimals: number) => Number(num.toFixed(decimals));

    const imgStyle = poster_path ? {
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    } : {}

    return (
        <div className="group relative max-w-[340px] cursor-pointer ">
            <div
                style={imgStyle}
                className="bg-emptyColor tabletLg:h-[470px] h-[286px] relative flex justify-center items-center rounded-[10px]">

                <div
                    className="absolute inset-0 bg-formElementColor bg-opacity-0 group-hover:bg-opacity-65
                    flex items-center justify-center rounded-[10px] transition-all duration-300 ease-in-out">
                    <ButtonBase title={t('cards_movie_button')} onClick={() => alert('Переход на страницу...')}
                                style="card"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    />
                </div>


                {!release_date && <Rating rating={rounded(vote_average, 1)}/>}

                {!poster_path && <Empty/>}
            </div>

            <h3 className="tabletLg:text-smallFontSize text-[15px] mt-2 mb-1">{title}</h3>

            {genres && genres.map((genre: string, index: number) => (
                <span key={index}>
                    <a className="inline-block text-decorTextColor tabletLg:text-[15px] text-[12px]" href="/public">{genre}</a>
                    {index < genres.length - 1 && <span>,  </span>}
                </span>
            ))}

            {release_date && (
                <p className="text-[15px] text-[#F2F60F]">{formatDate(release_date)}</p>
            )}
        </div>
    );
};
