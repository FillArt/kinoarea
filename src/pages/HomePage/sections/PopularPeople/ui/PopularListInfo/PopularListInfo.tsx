import {PopularPeopleType} from "@/pages/HomePage/sections/PopularPeople/api/PopularPeopleAPI.type.ts";

type PopularListInfoProps = {
    data: PopularPeopleType[]
}

export const PopularListInfo = ({data}: PopularListInfoProps) => {
    return (
        <div className="bg-[#1B2133] h-full rounded-[10px] py-[15px] pl-[20px] pr-[17px]">
            {data.map((person, index) => (
                <div key={person.id}
                     className={`flex pb-[15px] pt-[15px] justify-between items-center ${index === data.length - 1 ? '' : 'border-b-2 border-[#1E2538]'}`}> {/* добавлен key для оптимизации React */}
                    <div className="">
                        <h3 className="text-[20px] font-bold">{person.name}</h3>
                        <h4 className="text-[15px] opacity-50 text-[#3B486B]">{person.original_name}</h4>
                        <span className="text-decorTextColor text-[14px]">87 лет</span>
                    </div>
                    <span className="text-[15px] text-decorTextColor font-bold">{index + 3}-е место</span>
                </div>
            ))}
        </div>
    );
};