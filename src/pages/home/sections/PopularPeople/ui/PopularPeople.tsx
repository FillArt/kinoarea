import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect, useState} from "react";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";
import {PopularPhotoInfo} from "@/pages/home/sections/PopularPeople/ui/PopularPhotoInfo/PopularPhotoInfo.tsx";
import {PopularListInfo} from "@/pages/home/sections/PopularPeople/ui/PopularListInfo/PopularListInfo.tsx";
import {PeopleType} from "@/shared/types/PepoleType.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {
    fetchPopularPersonTC,
    PopularPersonSelector
} from "@/pages/home/sections/PopularPeople/model/PopularPeopleSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {useTranslation} from "react-i18next";


export const PopularPeople = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation("popularPeople");

    useEffect(() => {
        dispatch(fetchPopularPersonTC('day'));
        dispatch(fetchPopularPersonTC('week'));
    }, [dispatch]);

    const popularDay = useAppSelector((state) => PopularPersonSelector(state, 'day'));
    const popularWeek = useAppSelector((state) => PopularPersonSelector(state, 'week'));

    const [filterPopularTime, setFilterPopularTime] = useState<'day' | 'week'>('day');

    const [firstPerson, setFirstPerson] = useState<PeopleType | null>(null);
    const [secondPerson, setSecondPerson] = useState<PeopleType | null>(null);
    const [restPersons, setRestPersons] = useState<PeopleType[]>([]);

    const distributorPerson = (arr: PeopleType[]) => {
        const [first, second, ...rest] = arr;
        setFirstPerson(first || null);
        setSecondPerson(second || null);
        setRestPersons(rest || []);
    };

    const timeList: { label: string, value: string }[] = [
        { label: t('week'), value: 'week' },
        { label: t('day'), value: 'day' },
    ];

    const onClickHandler = (value: 'day' | 'week') => setFilterPopularTime(value)

    useEffect(() => {
        distributorPerson(filterPopularTime === 'day' ? popularDay : popularWeek);
    }, [filterPopularTime, popularDay, popularWeek]);


    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                <SectionTitle title={t('title')} line={false}>
                    <div className="phone:flex hidden justify-between tabletLg:max-w-[180px] max-w-[150px] w-full">
                        {timeList.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => onClickHandler(item.value as 'day' | 'week')}
                                className={`${
                                    filterPopularTime === item.value ? "opacity-100" : "opacity-50"
                                } tabletLg:text-smallFontSize text-[15px]`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="phone:hidden block mt-[8px]">
                        <ButtonIcon onClick={() => alert('Заглушка')} style="secondary">
                            <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                        </ButtonIcon>
                    </div>
                </SectionTitle>

                <div className="grid grid-cols-12 gap-[23px] tabletLg:mt-[63px] mt-[30px]">
                    <div className="tablet:col-span-4 col-span-6">
                        <PopularPhotoInfo data={firstPerson} place={t('first')}/>
                    </div>
                    <div className="tablet:col-span-4 col-span-6">
                        <PopularPhotoInfo data={secondPerson} place={t('second')}/>
                    </div>
                    <div className="tablet:col-span-4 col-span-12">
                        <PopularListInfo data={restPersons}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
