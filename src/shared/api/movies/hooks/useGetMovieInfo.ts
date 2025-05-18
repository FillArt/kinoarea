import {useGetMovieInfoQuery} from "@/shared/api/movies/movieApi.ts";
//import {useTranslation} from "react-i18next";
import {formatRuntime} from "@/shared/helpers/formatRuntime.ts";


export const useGetMovieInfo = (id: number) => {
    const { data: mainInfo, isLoading, error } = useGetMovieInfoQuery(id!, {
        skip: !id,
    });

    // const {t} = useTranslation('descriptionCategory');

    if (!mainInfo || isLoading || error) return null;

    return {
        title: mainInfo.title,
        original_title: mainInfo.original_title,
        description: mainInfo.overview,
        poster: mainInfo.poster_path,
        rating: mainInfo.vote_average,
        categories: mainInfo.genres,
        general: [
            {key: 'year', label: 'Год:', value: mainInfo.release_date.split('-')[0]},
            {key: 'countries', label: 'Страна:', value: mainInfo.production_countries.map((country) => country.name)},
            {key: 'tagline', label: 'Слоган:', value: mainInfo.tagline},
            {key: 'certification', label: 'Возраст', value: ''},
            {key: 'time', label: 'Время', value: `${mainInfo.runtime} мин. / ${formatRuntime(mainInfo.runtime)}`,},
            {key: '', label: '', value: ''},
        ]
    };
}


export const useGetMovieBackground = (id: number | undefined) => {
    const { data: mainInfo, isLoading, error } = useGetMovieInfoQuery(id!, {
        skip: !id,
    });

    if (!mainInfo || isLoading || error) return null;

    return mainInfo.backdrop_path;
};