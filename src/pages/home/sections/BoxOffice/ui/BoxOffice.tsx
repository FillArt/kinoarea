import {Section} from "@/shared/ui/sections/Section.tsx";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {formatDate} from "@/shared/helpers/formatDate.ts";
import {useEffect, useState} from "react";
import {BoxOfficeType} from "@/shared/api/movies/movieType.ts";
import {ItemMovie} from "@/pages/home/sections/BoxOffice/ui/ItemMovie.tsx";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {useTranslation} from "react-i18next";
import {useGetDiscoverMoviesQuery} from "@/shared/api/movies/movieApi.ts";

export const BoxOffice = () => {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const {data } = useGetDiscoverMoviesQuery()

    const {t} = useTranslation('boxOffice');
    const [prepareMovies, setPrepareMovies] = useState<BoxOfficeType[]>([])
    const breakpoint = useBreakpoint()

    useEffect(() => {
        if (breakpoint === "phone" && data) {
            setPrepareMovies(data.slice(0, 4));
        } else {
            if(data) {
                setPrepareMovies(data.slice(0, 5));
            }
        }
    }, [data, breakpoint]);



    return (
        <Section>
            <SectionTitle title={t('title')} sectionVersion="two">
                {formatDate(lastWeek.toISOString().split("T")[0])} — {formatDate(today.toISOString().split("T")[0])}
            </SectionTitle>

            <div className="grid tabletLg:grid-cols-10 grid-cols-12 gap-[42px] tabletLg:mt-[63px] mt-[30px]">
                {prepareMovies.map((item, index) => (
                    <div className="tabletLg:col-span-2 tablet:col-span-4 col-span-6">
                        <ItemMovie item={item} index={index} />
                    </div>
                ))}
            </div>


        </Section>
    );
};