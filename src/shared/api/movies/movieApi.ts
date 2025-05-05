import {baseApi} from "@/shared/api/baseApi.ts";
import {
    GenresResponseType,
    GenreType,
    MoviesResponseType,
    MovieType,
    TrailerResponseType,
    TrailerType
} from "@/shared/api/movies/movieType.ts";


export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getGenres: build.query<GenreType, void>({
            query: () => ({
                url: "/genre/movie/list",
                method: "GET",
                params: {
                    language: import.meta.env.VITE_APP_LANGUAGE,
                    region: "US",
                },
            }),

            transformResponse: (response: GenresResponseType) => {
                const genresMap: GenreType = {};
                response.genres.forEach((genre) => {
                    genresMap[genre.id] = genre.name;
                });
                return genresMap;
            },
        }),

        getNowPlaying: build.query<MovieType[], void>({
            query: () => ({
                url: "/movie/now_playing",
                method: "GET",
                params: {
                    language: import.meta.env.VITE_APP_LANGUAGE,
                    region: "US",
                },
            }),

            transformResponse: (response: { results: MovieType[] }) => response.results,
        }),

        getTrailer: build.query<TrailerType | undefined | any, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}/videos`,
                method: "GET",
                params: {
                    language: import.meta.env.VITE_APP_LANGUAGE,
                    region: "US",
                },
            }),

            transformResponse: (response: { results: TrailerResponseType[] }) => {
                const trailer = response.results[0];
                if (!trailer) return undefined;

                const posterUrl = `https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`;

                return {
                    id: trailer.id,
                    posterUrl,
                    trailer: {
                        name: trailer.name,
                        url: trailer.key
                    }
                }
            }

        }),

        getMultipleTrailers: build.query<TrailerType[], number[]>({
            async queryFn(movieIds, _api, _extraOptions, fetchWithBQ) {

                const results = await Promise.all(
                    movieIds.map(async (id) => {
                        const response = await fetchWithBQ({
                            url: `/movie/${id}/videos`,
                            method: 'GET',
                            params: {
                                language: import.meta.env.VITE_APP_LANGUAGE,
                                region: 'US',
                            },
                        });

                        if (response.error) return undefined;

                        const trailer = (response.data as { results: TrailerResponseType[] }).results?.[0];
                        if (!trailer) return undefined;

                        return {
                            id,
                            posterUrl: `https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`,
                            trailer: {
                                name: trailer.name,
                                url: trailer.key,
                            },
                        };
                    })
                );

                return {data: results.filter(Boolean) as TrailerType[]};
            },
        }),

        getPopular100Movies: build.query<MovieType[], void>({
            async queryFn(_arg, _api, _extraOptions, fetchWithBQ) {
                const pages = [1, 2, 3, 4, 5];

                const responses = await Promise.all(
                    pages.map(async (page) => {
                        const result = await fetchWithBQ(`/movie/popular?page=${page}`);
                        if (result.error) throw result.error;
                        return result.data as MoviesResponseType;
                    })
                );

                const allMovies: MovieType[] = responses.flatMap((res: MoviesResponseType): MovieType[] => res.results);

                const unique: MovieType[] = allMovies.filter((movie: MovieType, index: number, self: MovieType[]): boolean =>
                    index === self.findIndex((m) => m.id === movie.id)
                ).slice(0, 100);

                return {
                    data: unique.sort((a, b) => b.vote_average - a.vote_average),
                };
            }
        }),

        getUpcomingMovie: build.query<MovieType[], void>({
            query: () => ({
                url: "movie/upcoming",
                method: "GET",
                params: {
                    language: import.meta.env.VITE_APP_LANGUAGE,
                    region: "US",
                },
                
            }),
            transformResponse: (response: { results: MovieType[] }) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                return response.results.filter((movie) => {
                    if (!movie.release_date) return false; // Если даты нет, исключаем фильм
                    const movieDate = new Date(movie.release_date);
                    return movieDate >= today; // Оставляем только сегодняшние и будущие
                })
            }
        })

    }),
})

export const {
    useGetGenresQuery, 
    useGetNowPlayingQuery, 
    useGetTrailerQuery, 
    useGetPopular100MoviesQuery, 
    useGetMultipleTrailersQuery,
    useGetUpcomingMovieQuery
} = moviesApi;
