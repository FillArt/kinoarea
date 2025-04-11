import {formatCurrency} from "@/shared/helpers/formatCurrency.ts";
import {BoxOfficeType} from "@/shared/types/MovieType.ts";


type ItemMovieProps = {
    item: BoxOfficeType;
    index: number;
}

export const ItemMovie = ({item, index}:  ItemMovieProps) => {
    return (
        <div className="flex gap-[12px] items-center">
            <div style={{backgroundImage: `url(${item.img})`}}
                 className="min-w-[100px] min-h-[141px]  bg-cover bg-center"></div>
            <div>
                <h3 className="mb-[11px] text-[18px] font-bold">{index + 1}. {item.title}</h3>
                <span className="block text-decorTextColor">${formatCurrency(Number(item.revenue))}</span>
                {item.budget ? <span className="block opacity-40">${formatCurrency(Number(item.budget))}</span> :
                    <span className="block opacity-40">Not found</span>}
            </div>
        </div>
    )
};