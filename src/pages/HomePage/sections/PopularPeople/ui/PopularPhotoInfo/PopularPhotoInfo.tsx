import {PopularPeopleType} from "@/pages/HomePage/sections/PopularPeople/api/PopularPeopleAPI.type.ts";

type PopularPhotoInfoProps = {
    data: PopularPeopleType | null
    place: number
}

export const PopularPhotoInfo = ({data, place}: PopularPhotoInfoProps) => {

    const imgStyle = data?.profile_path
        ? {
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${data.profile_path}")`,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: 'overlay',
        }
        : {};

    return (
        <div style={imgStyle} className="h-full rounded-[10px] py-[12px] px-[16px] flex flex-col justify-between rounded-[10px]">
            <span className="text-[15px] text-decorTextColor">{place}-е место</span>
            <div className="mx-[20px] mb-[25px]">
                <h3 className="text-[27px] font-bold">{data?.name}</h3>
                <h4 className="text-[20px] opacity-50">{data?.original_name}</h4>
                <span className="text-decorTextColor text-[15px]">57 лет</span>
            </div>
        </div>
    );
};
