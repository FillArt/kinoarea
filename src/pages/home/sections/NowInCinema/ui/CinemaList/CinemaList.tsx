import {CardMovie} from "@/shared/ui/cards";
import {Filter} from "@/pages/home/sections/NowInCinema/hooks/useCategoriesList.ts";
import {MovieType} from "@/shared/api/movies/movieType.ts";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";


type CinemaListProps = {
    movies: MovieType[],
    filter: Filter,
    setFullStatus: (value: boolean) => void,
    isLoading: any,
}


export const CinemaList = ({movies, filter, setFullStatus, isLoading}: CinemaListProps) => {

    let filteredMovies: MovieType[] = movies;

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

    if(filteredMovies.length === 0) setFullStatus(true);

    console.log(isLoading, 'Helllo man!')

    return (
        <div className="tabletLg:mt-14 mt-[28px] grid grid-cols-12 gap-[23px]">


            {filteredMovies.length > 0 ? (
                filteredMovies.map((movie: MovieType) => (
                    <div className="tablet:col-span-3 phone:col-span-4 col-span-6" key={movie.id}>
                        <CardMovie movie={movie}/>
                    </div>
                ))
            ) : (
                <div className="tablet:col-span-12">
                    <EmptyCinemaList/>
                </div>

            )}


        </div>
    );
};
;