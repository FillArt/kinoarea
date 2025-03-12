import {useEffect, useState} from "react";
import {HomePageLayout} from "@/shared/layouts";
import {NowInCinema} from "@/pages/home/sections/NowInCinema/ui/NowInCinema.tsx";
import {NewTrailers} from "@/pages/home/sections/NewTrailers/ui/NewTrailers.tsx";
import {PopularFilms} from "@/pages/home/sections/PopularFilms/ui/PopularFilms.tsx";
import {PopularPeople} from "@/pages/home/sections/PopularPeople/ui/PopularPeople.tsx";
import {PeopleType} from "@/shared/types/PepoleType.ts";
import {peopleAPI} from "@/shared/api/PeopleAPI.ts";

export const HomePage = () => {
    const [popularPersonDay, setPopularPersonDay] = useState<PeopleType[]>([]);
    const [popularPersonWeek, setPopularPersonWeek] = useState<PeopleType[]>([]);

    useEffect(() => {

        const fetchPopularPerson = async (time: 'day' | 'week') => {
            const res = await peopleAPI.getPopularPeople(time)
            return res.data.results;

        }

        fetchPopularPerson('day').then((res) => setPopularPersonDay(res.slice(0,6)))
        fetchPopularPerson('week').then((res) => setPopularPersonWeek(res.slice(0,6)))
    }, []);

    return (
        <HomePageLayout>
            <NowInCinema />
            <NewTrailers />
            <PopularFilms />
            <PopularPeople popularDay={popularPersonDay} popularWeek={popularPersonWeek} />
        </HomePageLayout>
    );
};