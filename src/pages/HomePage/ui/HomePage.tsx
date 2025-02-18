import {HomePageLayout} from "@/common/components/layouts";
import {NowInCinema} from "@/pages/HomePage/sections/NowInCinema";
import {NewTrailers} from "@/pages/HomePage/sections/NewTrailers";

export const HomePage = () => {
    return (
        <HomePageLayout>
            <NowInCinema/>
            <NewTrailers/>
        </HomePageLayout>
    );
};