import {CardMovie} from "@/shared/ui/cards";
import {Filter} from "@/pages/home/sections/NowInCinema/hooks/useCategoriesList.ts";
import {MovieType} from "@/shared/api/movies/movieType.ts";
import {EmptyCinemaList} from "@/shared/ui/sections/EmptyCinemaList.tsx";
import {useTranslation} from "react-i18next";


type CinemaListProps = {
    movies: MovieType[],
    filter: Filter,
    setFullStatus: (value: boolean) => void,
}


export const CinemaList = ({movies, filter, setFullStatus}: CinemaListProps) => {

    console.log(filter, 'CinemaList Test')

    const { t } = useTranslation("nowInCinema");


    let filteredMovies: MovieType[] = movies;

    const filterByCategory = (category: string) => {
        return movies.filter((movie) =>
            movie.genres?.some((genre: string) => genre.toLowerCase().includes(category.toLowerCase())))
    }

    switch (filter) {
        case "action":
            filteredMovies = filterByCategory(t("action-filter").toLowerCase())
            break;
        case "adventures":
            filteredMovies = filterByCategory(t('adventures-filter').toLowerCase())
            break;
        case "comedy":
            filteredMovies = filterByCategory(t('comedy-filter').toLowerCase())
            break;
        case "fantasy":
            filteredMovies = filterByCategory(t('fantasy').toLowerCase())
            break;
        case "thrillers":
            filteredMovies = filterByCategory(t('thrillers-filter').toLowerCase())
            break;
        case "drama":
            filteredMovies = filterByCategory(t('drama').toLowerCase())
            break;
    }

    if(filteredMovies.length === 0) setFullStatus(true);

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