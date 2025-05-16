import {baseApi} from "@/shared/api/baseApi.ts";
import {
    BoxOfficeType,
    GenresResponseType,
    GenreType, MovieMainInfo,
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

        getMoviesByGenreId: build.query<MoviesResponseType, { genre_id: number, page: number }>({
            query: ({genre_id, page}) => ({
                url: "/discover/movie",
                method: "GET",
                params: {
                    region: "US",
                    with_genres: genre_id,
                    page
                }
            }),
        }),

        getNowPlaying: build.query<MovieType[], void>({
            query: () => ({
                url: "/movie/now_playing",
                method: "GET",
                params: {
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
        }),

        getDiscoverMovies: build.query<BoxOfficeType[], void>({
            async queryFn(_payload, _api, _extraOptions, fetchWithBQ) {
                const today = new Date();
                const lastWeek = new Date();
                lastWeek.setDate(today.getDate() - 7);

                const res = await fetchWithBQ(`/discover/movie?sort_by=revenue.desc&primary_release_date.gte=${lastWeek.toISOString().split("T")[0]}&primary_release_date.lte=${today.toISOString().split("T")[0]}`)
                const resType = res.data as MoviesResponseType;

                const boxOfficeData = await Promise.all(
                    resType.results.map(async (item: MovieType) => {
                        const details = await fetchWithBQ(`movie/${item.id}`) as { data: BoxOfficeType }
                        return {
                            title: item.title,
                            revenue: details.data.revenue,
                            img: `https://image.tmdb.org/t/p/w500/${details.data.backdrop_path}`,
                            budget: details.data.budget,
                        };
                    })
                );

                return {data: boxOfficeData}
            }
        }),

        getMovieInfo: build.query<MovieMainInfo, number>({
            query: (movie_id: number) => ({
                url: `/movie/${movie_id}`,
                method: "GET",
                params: {
                    region: "US",
                },
            }),
        })

    }),
})

export const {
    useGetGenresQuery,
    useGetNowPlayingQuery,
    useGetPopular100MoviesQuery,
    useGetMultipleTrailersQuery,
    useGetUpcomingMovieQuery,
    useGetDiscoverMoviesQuery,
    useGetMoviesByGenreIdQuery,
    useGetMovieInfoQuery,
} = moviesApi;
