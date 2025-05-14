import {MovieType} from "@/shared/api/movies/movieType.ts";
import {CardMovie} from "@/shared/ui/cards";

type CategoryContentProps = {
    movies: MovieType[]
}

export const CategoryContent = ({movies}: CategoryContentProps) => {
    return (
        <div className="tabletLg:mt-14 mt-[28px] grid grid-cols-12 gap-[23px]">
            {movies.map((movie: MovieType) => (
                <div className="tablet:col-span-3 phone:col-span-4 col-span-6" key={movie.id}>
                    <CardMovie movie={movie}/>
                </div>
            ))}
        </div>
    );
};