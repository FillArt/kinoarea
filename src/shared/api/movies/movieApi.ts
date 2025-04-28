import {baseApi} from "@/shared/api/baseApi.ts";
import {GenresResponseType, GenreType, MovieType} from "@/shared/api/movies/movieType.ts";


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
    })
})

export const { useGetGenresQuery, useGetNowPlayingQuery  } = moviesApi;
