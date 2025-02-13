import {Filter} from "@/widgets/NowInCinema/ui/NowInCinema.tsx";
import {Empty} from "@/common/components/cards/CardMovie/Empty/Empty.tsx";
import {Rating} from "@/common/components/cards/CardMovie/Rating/Rating.tsx";
import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";

type CardMovieProps = {
    category: Filter;
    title: string;
    rating: number;
    img?: string;
}

export const CardMovie = ({category, title, rating}: CardMovieProps) => {
    return (
        <div className="group relative">
            <div className="bg-emptyColor h-[470px] relative flex justify-center items-center rounded-[10px]">

                <div className="absolute w-full h-full duration-300 bg-formElementColor bg-opacity-65 hidden group-hover:flex items-center justify-center rounded-[10px]">
                    <ButtonBase title="Карточка фильма" onClick={() => alert('Переход на страницу...')} style="card" />
                </div>

                <Rating rating={rating}/>
                <Empty/>
            </div>

            <h3 className="text-smallFontSize mt-2 mb-1">{title}</h3>
            <span className="block text-decorTextColor">{category}</span>
        </div>
    );
};
