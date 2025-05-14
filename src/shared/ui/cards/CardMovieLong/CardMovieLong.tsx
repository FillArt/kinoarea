import {Link} from "react-router-dom";
import {stabilizerEnURL} from "@/shared/helpers/stabilizerEnURL.ts";
import {lowercaseFirstLetter} from "@/shared/helpers/lowercaseFirstLetter.ts";
import {capitalizeFirstLetter} from "@/shared/helpers/capitalizeFirstLetter.ts";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {useTranslation} from "react-i18next";
import {Rating} from "@/shared/ui/cards/CardMovie/Rating/Rating.tsx";
import {MovieType} from "@/shared/api/movies/movieType.ts";


type CardMovieLongProps = {
    movie: MovieType;
    isFirst?: boolean;
    isLast?: boolean;
}

export const CardMovieLong = ({movie, isFirst,isLast}: CardMovieLongProps) => {
    const {title, vote_average, poster_path, genres} = movie;
    const {t} = useTranslation('cards');

    const rounded = (num: number, decimals: number) => Number(num.toFixed(decimals));


    const imgStyle = poster_path ? {
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    } : {}

    const borderTop = isFirst ? '' : 'border-t';
    const borderBottom = isLast ? '' : 'border-b';

    return (
        <div className={`pt-[33px] pb-[33px] border-[#3B486B] ${borderTop} ${borderBottom} flex items-center`}>
            <div style={imgStyle} className="min-h-[200px] min-w-[146px] mr-[28px] rounded-[10px]"></div>

            <div className="flex phone:items-center phone:gap-[0] gap-[10px] justify-between w-[100%] phone:flex-row flex-col">
                <div>
                    <h3 className="tabletLg:text-[25px] text-[17px] font-bold cursor-pointer hover:text-[#3657CB] transition-all">{title}</h3>
                    {genres && genres.map((genre: string, index: number) => (
                        <span key={index}>
                            <Link to={`/category/${stabilizerEnURL(lowercaseFirstLetter(genre))}`}>
                                <span
                                    className="inline-block text-decorTextColor hover:text-[#3657CB] tabletLg:text-[15px] text-[12px]">{capitalizeFirstLetter(genre)}</span>
                                {index < genres.length - 1 && <span>,  </span>}
                            </Link>
                        </span>
                    ))}
                </div>

                <div className="flex phone:gap-[50px] gap-[20px] phone:flex-row flex-col">
                    <div className="flex flex-col max-w-[77px] gap-[8px] text-center">
                        <Rating absolute={false} rating={rounded(vote_average, 1)}/>
                        <span>IMDb</span>
                    </div>


                    <ButtonBase title={t('cards_movie_button')} onClick={() => alert('Переход на страницу...')}
                                style="border"
                                className="transition-opacity duration-300 ease-in-out"
                    />
                </div>
            </div>



        </div>
    );
};
