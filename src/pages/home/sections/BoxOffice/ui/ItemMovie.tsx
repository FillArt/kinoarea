import {formatCurrency} from "@/shared/helpers/formatCurrency.ts";
import {BoxOfficeType} from "@/shared/types/MovieType.ts";
import {useEffect, useState} from "react";
import {Empty} from "@/shared/ui/cards/CardMovie/Empty/Empty.tsx";


type ItemMovieProps = {
    item: BoxOfficeType;
    index: number;
}

export const ItemMovie = ({item, index}:  ItemMovieProps) => {

    const [statusImg, setStatusImg] = useState<string>()

    useEffect(() => {
        const urlImg = item.img.split("/");
        setStatusImg(urlImg[urlImg.length - 1]);
    }, [item.img]);


    return (
        <div className="flex gap-[12px] items-center">

            {statusImg !== 'null'  ? (
                <div style={{ backgroundImage: `url(${item.img})` }}
                     className="min-w-[100px] min-h-[141px]  bg-cover bg-center rounded-[5px]">
                </div>
            ) : (

                <div className="min-w-[100px] flex flex-col justify-center items-center bg-[#191E2E] min-h-[141px]  bg-cover bg-center rounded-[5px]">
                    <Empty noText={true}/>
                </div>
            )}

            <div>
                <h3 className="tablet:mb-[11px] mb-[5px] tablet:text-[18px] text-[15px] cursor-pointer font-bold hover:text-[#3657CB]">{index + 1}. {item.title}</h3>
                <span className="block text-decorTextColor tablet:text-[16px] text-[13px]">{formatCurrency(Number(item.revenue))}</span>
                {item.budget ? <span className="block opacity-40">{formatCurrency(Number(item.budget))}</span> :
                    <span className="block opacity-40">Not found</span>}
            </div>
        </div>
    )
};