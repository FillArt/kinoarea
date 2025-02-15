import {CardMovie} from "@/common/components/cards";
import {NowInCinemaAPI} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {Filter} from "@/pages/HomePage/sections/NowInCinema/ui/NowInCinema.tsx";


type ChinemaListProps = {
    movies: NowInCinemaAPI[],
    filter: Filter,
}


export const ChinemaList = ({movies, filter}: ChinemaListProps) => {

    let filteredMovies: NowInCinemaAPI[] = movies;

    const filterByCategory = (category: string) => {
        return movies.filter((movie) =>
            movie.genres?.some((genre) => genre.toLowerCase().includes(category.toLowerCase())))
    }

    switch (filter) {
        case "action":
            filteredMovies = filterByCategory('action')
            break;
        case "adventures":
            filteredMovies = filterByCategory('adventure')
            break;
        case "comedy":
            filteredMovies = filterByCategory('comedy')
            break;
        case "fantasy":
            filteredMovies = filterByCategory('fantasy')
            break;
        case "thrillers":
            filteredMovies = filterByCategory('thrillers')
            break;
        case "drama":
            filteredMovies = filterByCategory('drama')
            break;
    }


    return (
        <div className="mt-14 grid grid-cols-12 gap-[23px]">

            {filteredMovies.map((movie: NowInCinemaAPI) => (
                <div className="col-span-3" key={movie.id}>
                    <CardMovie movie={movie} />
                </div>
            ))}

        </div>
    );
};
;