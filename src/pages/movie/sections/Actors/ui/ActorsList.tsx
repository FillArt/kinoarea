import {ActorsCard} from "@/pages/movie/sections/Actors/ui/ActorsCard.tsx";
import {useParams} from "react-router-dom";
import {useGet10ActorsByFilmIdQuery} from "@/shared/api/movies/movieApi.ts";
import {ActorType} from "@/shared/api/people/peopleType.ts";

export const ActorsList = () => {

    const {id} = useParams();
    const { data } = useGet10ActorsByFilmIdQuery(Number(id)) as {data?: ActorType[] };

    return (
        <section className="mt-[60px] grid grid-cols-5 gap-[47px]">
            {data?.map((actor) => (
                <ActorsCard actor={actor} />
            ))}
        </section>
    );
};