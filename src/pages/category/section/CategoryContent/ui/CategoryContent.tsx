import {MovieType} from "@/shared/api/movies/movieType.ts";
import {CardMovie, CardMovieLong} from "@/shared/ui/cards";
import {useEffect, useState} from "react";


export type CategoryFilterType = 'default' | 'imdb_rating' | 'year' | 'popularity'

type CategoryContentProps = {
    movies: MovieType[],
    style: 'col' | 'row',
    filter: CategoryFilterType,
}

export const CategoryContent = ({movies, filter, style}: CategoryContentProps) => {
    const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const sorted = [...movies];

        switch (filter) {
            case "imdb_rating":
                sorted.sort((a, b) => b.vote_average - a.vote_average);
                break;
            case "year":
                sorted.sort((a, b) => {
                    const dateA = new Date(a.release_date ?? '').getFullYear();
                    const dateB = new Date(b.release_date ?? '').getFullYear();
                    return dateB - dateA;
                });
                break;
            case "popularity":
                sorted.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
                break;
            default:
                break;
        }

        setFilteredMovies(sorted);
    }, [filter, movies]);


    return (
        <>
            {style === 'col' ? (
                <div className="tabletLg:mt-14 mt-[28px] grid grid-cols-12 gap-[23px]">
                    {filteredMovies.map((movie: MovieType) => (
                        <div className="tablet:col-span-3 phone:col-span-4 col-span-6" key={movie.id}>
                            <CardMovie movie={movie}/>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {filteredMovies.map((movie: MovieType, index: number) => (
                        <div key={movie.id}>
                            <CardMovieLong
                                movie={movie}
                                isFirst={index === 0}
                                isLast={index === movies.length - 1}
                            />
                        </div>
                    ))}
                </>
            )}
        </>
    );
};