import {Filter} from "@/widgets/NowInCinema/ui/NowInCinema.tsx";
import {Empty} from "@/common/components/cards/CardMovie/Empty/Empty.tsx";
import {Rating} from "@/common/components/cards/CardMovie/Rating/Rating.tsx";

type CardMovieProps = {
    category: Filter;
    title: string;
    rating: number;
    img?: string;
}

export const CardMovie = ({category, title, rating}: CardMovieProps) => {
    return (
        <div>
            <div className="bg-emptyColor h-[470px] relative flex justify-center items-center rounded-[10px]">
                <Rating rating={rating}/>
                <Empty/>
            </div>

            <h3 className="text-smallFontSize mt-2 mb-1">{title}</h3>
            <span className="block text-decorTextColor">{category}</span>

        </div>
    );
};
