import {MovieType} from "@/shared/api/movies/movieType.ts";
import {CardMovie, CardMovieLong} from "@/shared/ui/cards";

type CategoryContentProps = {
    movies: MovieType[],
    style: 'col' | 'row'
}

export const CategoryContent = ({movies, style}: CategoryContentProps) => {
    return (
        <>

            {style === 'col' ? (
                <div className="tabletLg:mt-14 mt-[28px] grid grid-cols-12 gap-[23px]">
                    {movies.map((movie: MovieType) => (
                        <div className="tablet:col-span-3 phone:col-span-4 col-span-6" key={movie.id}>
                            <CardMovie movie={movie}/>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {movies.map((movie: MovieType, index: number) => (
                        <div key={movie.id}>
                            <CardMovieLong
                                movie={movie}
                                isFirst={index === 0}
                                isLast={index === movies.length - 1}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};