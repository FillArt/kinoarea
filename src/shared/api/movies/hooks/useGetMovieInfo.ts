import {
    useGetMovieCreditsQuery,
    useGetMovieInfoQuery,
    useGetMovieRealiseDatesQuery
} from "@/shared/api/movies/movieApi.ts";
import { formatRuntime } from "@/shared/helpers/formatRuntime.ts";
import { formatCurrency } from "@/shared/helpers/formatCurrency.ts";
import { decodeCertification } from "@/shared/helpers/decodeCertification.ts";
import { formatDate } from "@/shared/helpers/formatDate.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {appLanguageSelector} from "@/app/AppSlice.ts";

export const useGetMovieInfo = (id: number) => {
    const language = useAppSelector(appLanguageSelector)

    const { data: mainInfo, isLoading, error } = useGetMovieInfoQuery(id, {
        skip: !id,
    });

    const { data: creditsInfo } = useGetMovieCreditsQuery(id, {
        skip: !id,
    });

    const { data: realiseInfo } = useGetMovieRealiseDatesQuery(id, {
        skip: !id,
    });

    if (!mainInfo || isLoading || error) return null;

    const getCrewMember = (job: string): string | undefined =>
        creditsInfo?.crew.find((item) => item.job === job)?.name;

    const crew = {
        artist: getCrewMember("Art Direction"),
        editor: getCrewMember("Editor"),
        director: getCrewMember("Director"),
        story: getCrewMember("Writer"),
        cinematographer: getCrewMember("Director of Photography"),
        composer: getCrewMember("Original Music Composer"),
    };

    const generalInfo = [
        { key: "year", label: "Год:", value: mainInfo.release_date.split("-")[0] },
        { key: "artist", label: "Художник", value: crew.artist },
        {
            key: "countries",
            label: "Страна:",
            value: mainInfo.production_countries.map((c) => c.name).join(", "),
        },
        { key: "editor", label: "Монтаж", value: crew.editor },
        { key: "tagline", label: "Слоган:", value: mainInfo.tagline },
        {
            key: "genres",
            label: "Жанр:",
            value: mainInfo.genres.map((g) => g.name).join(", "),
        },
        { key: "director", label: "Режиссёр:", value: crew.director },
        {
            key: "revenue",
            label: "Сборы:",
            value: mainInfo.revenue ? formatCurrency(mainInfo.revenue) : "—",
        },
        { key: "story", label: "Сценарий", value: crew.story },
        {
            key: "release",
            label: "Премьера",
            value: formatDate(realiseInfo?.release_date, language),
        },
        {
            key: "cinematographer",
            label: "Оператор",
            value: crew.cinematographer,
        },
        {
            key: "certification",
            label: "Возраст",
            value: decodeCertification(realiseInfo?.certification),
        },
        {
            key: "time",
            label: "Время",
            value: `${mainInfo.runtime} мин. / ${formatRuntime(mainInfo.runtime)}`,
        },
        { key: "composer", label: "Композитор", value: crew.composer },
    ];

    return {
        title: mainInfo.title,
        original_title: mainInfo.original_title,
        description: mainInfo.overview,
        poster: mainInfo.poster_path,
        rating: mainInfo.vote_average,
        categories: mainInfo.genres,
        general: generalInfo,
    };
};


export const useGetMovieBackground = (id: number | undefined) => {
    const { data: mainInfo, isLoading, error } = useGetMovieInfoQuery(id!, {
        skip: !id,
    });

    if (!mainInfo || isLoading || error) return null;

    return mainInfo.backdrop_path;
};