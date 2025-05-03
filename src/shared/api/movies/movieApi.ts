import {baseApi} from "@/shared/api/baseApi.ts";
import {
    GenresResponseType,
    GenreType,
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

                        const trailer = (response.data as {results: TrailerResponseType[]}).results?.[0];
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
    }),
})

export const {useGetGenresQuery, useGetNowPlayingQuery, useGetTrailerQuery, useGetMultipleTrailersQuery} = moviesApi;
