import {HomePageLayout} from "@/shared/layouts";
import {NowInCinema} from "@/pages/home/sections/NowInCinema/ui/NowInCinema.tsx";
import {NewTrailers} from "@/pages/home/sections/NewTrailers/ui/NewTrailers.tsx";
import {PopularFilms} from "@/pages/home/sections/PopularFilms/ui/PopularFilms.tsx";
import {PopularPeople} from "@/pages/home/sections/PopularPeople/ui/PopularPeople.tsx";

export const HomePage = () => {
    return (
        <HomePageLayout>
            <NowInCinema />
            <NewTrailers />
            <PopularFilms />
            <PopularPeople />
        </HomePageLayout>
    );
};