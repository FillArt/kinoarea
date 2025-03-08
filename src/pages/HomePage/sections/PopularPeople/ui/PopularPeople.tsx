import {SectionTitle} from "@/common/components/sections/SectionTitle.tsx";
import {PopularPeopleType} from "@/pages/HomePage/sections/PopularPeople/api/PopularPeopleAPI.type.ts";
import {useEffect, useState} from "react";
import {PopularPhotoInfo} from "@/pages/HomePage/sections/PopularPeople/ui/PopularPhotoInfo/PopularPhotoInfo.tsx";

type PopularPeopleProps = {
    popularDay: PopularPeopleType[],
    popularWeek: PopularPeopleType[],
}

export const PopularPeople = ({popularDay, popularWeek}: PopularPeopleProps) => {

    const [filterPopularTime, setFilterPopularTime] = useState<'day' | 'week'>('day');

    const [firstPerson, setFirstPerson] = useState<PopularPeopleType | null>(null);
    const [secondPerson, setSecondPerson] = useState<PopularPeopleType | null>(null);
    const [restPersons, setRestPersons] = useState<PopularPeopleType[]>([]);

    const distributorPerson = (arr: PopularPeopleType[]) => {
        const [first, second, ...rest] = arr;
        setFirstPerson(first || null);
        setSecondPerson(second || null);
        setRestPersons(rest || []);
    };

    useEffect(() => {
        distributorPerson(filterPopularTime === 'day' ? popularDay : popularWeek);
    }, [filterPopularTime, popularDay, popularWeek]);

    useEffect(() => {
        if (firstPerson) {
            console.log(firstPerson);
        }
    }, [firstPerson]);


    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                <SectionTitle title={'Популярные персоны'} line={false}>
                    <h1>Hello</h1>
                </SectionTitle>

                <div className="grid grid-cols-12 gap-[23px] mt-[63px]">
                    <div className="col-span-4 h-[444px]">
                        <PopularPhotoInfo data={firstPerson} place={1} />
                    </div>
                    <div className="col-span-4 h-[444px] rounded-[10px]">
                        <PopularPhotoInfo data={secondPerson} place={2} />
                    </div>
                    <div className="col-span-4 outline h-[444px] rounded-[10px]">
                        {restPersons.length > 0 ? restPersons.map(p => <p key={p.id}>{p.name}</p>) : "Нет данных"}
                    </div>
                </div>
            </div>
        </section>
    );
};
