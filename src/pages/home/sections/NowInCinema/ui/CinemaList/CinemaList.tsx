import {CardMovie} from "@/shared/ui/cards";
import {NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {Filter} from "@/pages/HomePage/sections/NowInCinema/ui/NowInCinema.tsx";


type CinemaListProps = {
    movies: NowInCinemaType[],
    filter: Filter,
}


export const CinemaList = ({movies, filter}: CinemaListProps) => {

    let filteredMovies: NowInCinemaType[] = movies;

    const filterByCategory = (category: string) => {
        return movies.filter((movie) =>
            movie.genres?.some((genre: string) => genre.toLowerCase().includes(category.toLowerCase())))
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
        <div className="tabletLg:mt-14 mt-[28px] grid grid-cols-12 gap-[23px]">

            {filteredMovies.map((movie: NowInCinemaType) => (
                <div className="tablet:col-span-3 phone:col-span-4 col-span-6" key={movie.id}>
                    <CardMovie movie={movie} />
                </div>
            ))}

        </div>
    );
};
;