import {ActorsCard} from "@/pages/movie/sections/Actors/ui/ActorsCard.tsx";

export const ActorsList = () => {
    return (
        <section className="mt-[60px] grid grid-cols-5 gap-[47px]">
            <ActorsCard/>
            <ActorsCard/>
            <ActorsCard/>
            <ActorsCard/>
            <ActorsCard/>

            <ActorsCard/>
            <ActorsCard/>
            <ActorsCard/>
            <ActorsCard/>
            <ActorsCard/>
        </section>
    );
};