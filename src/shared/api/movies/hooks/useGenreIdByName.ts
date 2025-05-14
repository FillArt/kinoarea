import { useGetGenresQuery } from "@/shared/api/movies/movieApi.ts";

export const useGenreIdByName = (name: string) => {
    const { data: genres, isLoading, isError } = useGetGenresQuery();

    console.log(genres, 'CJCCCJJCJ')

    if (!genres || isLoading || isError) return undefined;

    const foundKey = Object.entries(genres).find(([, value]) => value === name)?.[0];

    return foundKey ? Number(foundKey) : undefined;
};