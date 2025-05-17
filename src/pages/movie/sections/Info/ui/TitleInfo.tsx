import {RatingCircle} from "@/shared/ui/cards/CardMovie/Rating/RatingCircle.tsx";
import {truncateString} from "@/shared/helpers/truncateString.ts";


type TitleInfoProps = {
    title: string;
    original_title: string;
    vote_average: number
    overview: string
}

export const TitleInfo = ({title, original_title, overview, vote_average}: TitleInfoProps) => {
    return (
        <div className="mb-[30px]">
            <h1 className="text-[65px] font-black leading-none max-w-[630px] mb-[10px]">{title}</h1>
            <h2 className="text-[25px] font-medium mb-[15px]">{original_title}</h2>
            <div className="mb-[10px]">
                <RatingCircle name="IMDb" rating={vote_average}/>
            </div>
            <p className="text-[20px]">{truncateString(overview, 256)}</p>
            {/*<p className="text-[20px]">{truncateString(overview)}</p>*/}
        </div>
    );
};
