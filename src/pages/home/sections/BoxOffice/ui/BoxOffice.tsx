import {Section} from "@/shared/ui/sections/Section.tsx";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {formatDate} from "@/shared/helpers/formatDate.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {
    // BoxOfficeLoadedSelector,
    BoxOfficeSelector,
    fetchBoxOfficeTC
} from "@/pages/home/sections/BoxOffice/model/BoxOfficeSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";

export const BoxOffice = () => {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const dispatch = useAppDispatch();
    const infoMovies = useAppSelector(BoxOfficeSelector)
    // const isLoading = useAppSelector(BoxOfficeLoadedSelector)

    useEffect(() => {
        dispatch(fetchBoxOfficeTC())

    }, []);


    return (
        <Section>
            <SectionTitle title="Кассовые сборы">
                {formatDate(lastWeek.toISOString().split("T")[0])} — {formatDate(today.toISOString().split("T")[0])}
            </SectionTitle>

            {infoMovies ? infoMovies.map((item) => (
                <span>{item.title}</span>
            )) : null}

        </Section>
    );
};