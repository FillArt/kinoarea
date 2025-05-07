import {Section} from "@/shared/ui/sections/Section.tsx";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {formatDate} from "@/shared/helpers/formatDate.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {BoxOfficeSelector, fetchBoxOfficeTC} from "@/pages/home/sections/BoxOffice/model/BoxOfficeSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {BoxOfficeType} from "@/shared/api/movies/movieType.ts";
import {ItemMovie} from "@/pages/home/sections/BoxOffice/ui/ItemMovie.tsx";
import {useBreakpoint} from "@/shared/hooks/useBreakpoint.ts";
import {useTranslation} from "react-i18next";

export const BoxOffice = () => {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const {t} = useTranslation('boxOffice');
    const [prepareMovies, setPrepareMovies] = useState<BoxOfficeType[]>([])

    const dispatch = useAppDispatch();
    const infoMovies: BoxOfficeType[] = useAppSelector(BoxOfficeSelector)
    const breakpoint = useBreakpoint()


    // const isLoading = useAppSelector(BoxOfficeLoadedSelector)

    useEffect(() => {
        if (breakpoint === "phone") {
            setPrepareMovies(infoMovies.slice(0, 4));
        } else {
            setPrepareMovies(infoMovies.slice(0, 5));
        }
    }, [infoMovies, breakpoint]);


    useEffect(() => {
        dispatch(fetchBoxOfficeTC())
    }, []);


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