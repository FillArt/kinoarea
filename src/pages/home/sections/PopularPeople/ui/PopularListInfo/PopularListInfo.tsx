
import {useTranslation} from "react-i18next";
import {PeopleType} from "@/shared/api/people/peopleType.ts";

type PopularListInfoProps = {
    data: PeopleType[]
}

export const PopularListInfo = ({data}: PopularListInfoProps) => {
    const {t} = useTranslation('popularPeople')

    const indexPlace: Record<string, string> = {
        '0': t('third'),
        '1': t('fourth'),
        '2': t('fifth'),
        '3': t('sixth')
    }

    return (
        <div className="bg-[#1B2133] h-full rounded-[10px] tabletLg:py-[15px] py-[5px] tabletLg:pl-[33px] pl-[20px] tabletLg:pr-[29px] pr-[17px]">
            {data.map((person, index) => (
                <div key={person.id}
                     className={`flex tabletLg:pb-[15px] pb-[10px] tabletLg:pt-[15px] pt-[10px] justify-between items-center ${index === data.length - 1 ? '' : 'border-b-2 border-[#1E2538]'}`}> {/* добавлен key для оптимизации React */}
                    <div className="">
                        <h3 className="tabletLg:text-[20px] text-[15px] font-bold hover:text-[#3657CB] cursor-pointer">{person.name}</h3>
                        <h4 className="tabletLg:text-[15px] text-[11px] opacity-50 text-[#3B486B]">{person.original_name}</h4>
                        <span className="text-decorTextColor tabletLg:text-[14px] text-[11px]">87 лет</span>
                    </div>
                    <span className="text-[15px] text-decorTextColor font-bold">{indexPlace[index]}</span>
                </div>
            ))}
        </div>
    );
};