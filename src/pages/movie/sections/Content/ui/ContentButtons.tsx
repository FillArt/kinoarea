import {ContentModel, ContentMovie} from "@/pages/movie/sections/Content/model/contentModel"

type IProps = {
    type: string
    setType: (type: string) => void;
}

export const ContentButtons = ({type, setType}: IProps) => {

    return (
        <div className="flex gap-[50px] mt-[50px]">
            {ContentModel.map((item: ContentMovie) => <button
                className={`text-[21px] font-bold py-[15px] rounded-[10px] ${type === item.value ? "px-[21px] bg-[#3657CB] shadow-hoverDefaultButton" : "px-0"}`}
                onClick={() => setType(item.value)}>{item.label}</button>)}
        </div>
    );
};