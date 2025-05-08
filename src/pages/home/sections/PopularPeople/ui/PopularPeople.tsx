import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect, useState} from "react";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";
import {PopularPhotoInfo} from "@/pages/home/sections/PopularPeople/ui/PopularPhotoInfo/PopularPhotoInfo.tsx";
import {PopularListInfo} from "@/pages/home/sections/PopularPeople/ui/PopularListInfo/PopularListInfo.tsx";
import {useTranslation} from "react-i18next";
import {Section} from "@/shared/ui/sections/Section.tsx";
import {
    PopularPhotoInfoSkeleton
} from "@/pages/home/sections/PopularPeople/ui/PopularPhotoInfo/PopularPhotoInfoSkeleton.tsx";
import {
    PopularListInfoSkeleton
} from "@/pages/home/sections/PopularPeople/ui/PopularListInfo/PopularListInfoSkeleton.tsx";
// import {PopularFilmsLoadingSelector} from "@/pages/home/sections/PopularFilms/model/PopularFilmsSlice.ts";
import {Popup} from "@/widgets/Popup/Popup.tsx";
import {useGetPopularPeopleQuery} from "@/shared/api/people/peopleApi.ts";
import {PeopleType} from "@/shared/api/people/peopleType.ts";


export const PopularPeople = () => {
    const {t} = useTranslation("popularPeople");
    const [isShow, setIsShow] = useState<boolean>(false)
    const [filterPopularTime, setFilterPopularTime] = useState<'day' | 'week'>('day');

    const timeList: { label: string, value: string }[] = [
        {label: t('week'), value: 'week'},
        {label: t('day'), value: 'day'},
    ];

    const { data: dayData, isLoading } = useGetPopularPeopleQuery("day");
    const { data: weekData } = useGetPopularPeopleQuery("week");

    const [firstPerson, setFirstPerson] = useState<PeopleType | null>(null);
    const [secondPerson, setSecondPerson] = useState<PeopleType | null>(null);
    const [restPersons, setRestPersons] = useState<PeopleType[]>([]);

    const distributorPerson = (arr: PeopleType[]) => {
        const [first, second, ...rest] = arr;
        setFirstPerson(first || null);
        setSecondPerson(second || null);
        setRestPersons(rest || []);
    };

    const onClickHandler = (value: 'day' | 'week') => setFilterPopularTime(value)

    useEffect(() => {
        const data = filterPopularTime === "day" ? dayData : weekData;
        if (data) {
            distributorPerson(data.slice(0, 6));
        }
    }, [filterPopularTime, dayData, weekData]);


    return (
        <>
            <Popup isShow={isShow} setShow={setIsShow}>
                <div className="flex flex-col items-center mt-5 gap-[20px]">
                    {timeList.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => onClickHandler(item.value as 'day' | 'week')}
                            className={`${
                                filterPopularTime === item.value ? "opacity-100 text-[#3657CB]" : "opacity-50"
                            } text-white
                                        tabletLg:text-smallFontSize
                                        text-smallFontSizeTabletLg hover:text-[#3657CB]`}
                        >

                            {item.label}
                        </button>
                    ))}
                </div>
            </Popup>

            <Section>
                <SectionTitle title={t('title')} line={false}>
                    <div className="phone:flex hidden justify-between tabletLg:max-w-[180px] max-w-[150px] w-full">
                        {timeList.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => onClickHandler(item.value as 'day' | 'week')}
                                className={`${
                                    filterPopularTime === item.value ? "opacity-100" : "opacity-50 hover:text-[#3657CB] hover:opacity-100"
                                } tabletLg:text-smallFontSize text-[15px]`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="phone:hidden block mt-[8px]">
                        <ButtonIcon onClick={() => setIsShow(true)} style="secondary">
                            <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                        </ButtonIcon>
                    </div>
                </SectionTitle>

                <div className="grid grid-cols-12 gap-[23px] tabletLg:mt-[63px] mt-[30px]">
                    <div className="tablet:col-span-4 col-span-6">
                        {!isLoading ? (
                            <PopularPhotoInfo data={firstPerson} place={t('first')}/>
                        ) : (
                            <PopularPhotoInfoSkeleton/>
                        )}
                    </div>
                    <div className="tablet:col-span-4 col-span-6">
                        {!isLoading ? (
                            <PopularPhotoInfo data={secondPerson} place={t('second')}/>
                        ) : (
                            <PopularPhotoInfoSkeleton/>
                        )}
                    </div>
                    <div className="tablet:col-span-4 col-span-12">
                        {!isLoading ? (
                            <PopularListInfo data={restPersons}/>
                        ) : (
                            <PopularListInfoSkeleton/>
                        )}

                    </div>
                </div>
            </Section>
        </>
    );
};
