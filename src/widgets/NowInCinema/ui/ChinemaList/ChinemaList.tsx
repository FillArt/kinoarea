import {CardMovie} from "@/common/components/cards";
import {NowInCinemaAPI} from "@/widgets/NowInCinema/api/NowInCinemaAPI.types.ts";


type ChinemaListProps = {
    movies: NowInCinemaAPI[]
}


export const ChinemaList = ({movies}: ChinemaListProps) => {
    return (
        <div className="mt-14 grid grid-cols-12 gap-[23px]">

            {movies.map((movie: NowInCinemaAPI) => (
                <div className="col-span-3" key={movie.id}>
                    <CardMovie movie={movie} />
                </div>
            ))}

        </div>
    );
};
;