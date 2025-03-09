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
        <div style={imgStyle} className="tablet:h-full phone:h-[321px] h-[179px] tabletLg:py-[12px] py-[7px] tabletLg:px-[16px] px-[10px] flex flex-col justify-between rounded-[10px]">
            <span className="tabletLg:text-[15px] text-[12px] text-decorTextColor">{place}-е место</span>
            <div className="tabletLg:mx-[20px] phone:mx-[15px] tabletLg:mb-[25px] mb-[12px] leading-tight">
                <h3 className="tabletLg:text-[27px] text-[20px] font-bold">{data?.name}</h3>
                <h4 className="tabletLg:text-[20px] text-[15px] opacity-50">{data?.original_name}</h4>
                <span className="text-decorTextColor tabletLg:text-[15px] text-[12px]">57 лет</span>
            </div>
        </div>
    );
};
