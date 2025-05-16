import {MovieMainInfo} from "@/shared/api/movies/movieType.ts";
import {NavLink} from "react-router-dom";
import Arrow from "@/pages/category/section/CategoryTitle/assets/arrow.svg";
import {RatingCircle} from "@/shared/ui/cards/CardMovie/Rating/RatingCircle.tsx";
import {lowercaseFirstLetter} from "@/shared/helpers/lowercaseFirstLetter.ts";
import {capitalizeFirstLetter} from "@/shared/helpers/capitalizeFirstLetter.ts";

type InfoProps = {
    info: MovieMainInfo
}

export const Info = ({info}: InfoProps) => {

    const {poster_path, title, original_title, vote_average, genres, overview} = info


    return (
        <div className="container mx-auto max-w-[1163px] mt-[47px]">
            <div className="flex items-center gap-[50px] text-white">
                <img className="max-w-[395px] max-h-[539px] rounded-[10px]" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>

                <div className="mb-[3px]">
                    <div className="text-[16px] flex gap-[10px]">
                        <NavLink className="text-[#4F5B7C] hover:text-blue-600 transition-all" to="/">Home</NavLink>
                        <img src={Arrow} alt="decor"/>
                        <NavLink className="text-[#4F5B7C] hover:text-blue-600 transition-all" to={`/category/${lowercaseFirstLetter(genres[0].name)}`}> { capitalizeFirstLetter(genres[0].name)}</NavLink>
                        <img src={Arrow} alt="decor"/>
                        <span>{title}</span>
                    </div>

                    <div>
                        <h1 className="text-[65px] font-black leading-none max-w-[630px] mb-[10px]">{title}</h1>
                        <h2 className="text-[25px] font-medium mb-[15px]">{original_title}</h2>
                        <div className="mb-[10px]">
                            <RatingCircle name="IMDb" rating={vote_average}/>
                        </div>
                        <p className="text-[20px]">{overview}</p>
                    </div>


                </div>

            </div>
        </div>
    );
};
