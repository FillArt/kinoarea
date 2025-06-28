import {ActorType} from "@/shared/api/people/peopleType.ts";
import {Link} from "react-router-dom";

type IProps = {
    actor: ActorType
}

export const ActorsCard = ({actor}: IProps) => {
    return (
        <div>
            <div className=" w-full max-h-[368px] mb-[18px] rounded-[5px]">
                <img className="max-h-[368px] w-auto object-contain rounded-[5px]" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt=""/>
            </div>

            <div>
                <Link to="/">
                    <h3 className="text-[18px] font-bold text-white">{actor.name}</h3>
                </Link>
                <span className="text-white opacity-70 text-[14px]">{actor.original_name}</span>
                <span className="block text-[#F2F60F]">{actor.character}</span>
            </div>
        </div>
    );
};
