import {Section} from "@/shared/ui/sections/Section.tsx";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {formatDate} from "@/shared/helpers/formatDate.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {BoxOfficeSelector, fetchBoxOfficeTC} from "@/pages/home/sections/BoxOffice/model/BoxOfficeSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {BoxOfficeType} from "@/shared/types/MovieType.ts";
import {ItemMovie} from "@/pages/home/sections/BoxOffice/ui/ItemMovie.tsx";

export const BoxOffice = () => {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const dispatch = useAppDispatch();
    const infoMovies: BoxOfficeType[] = useAppSelector(BoxOfficeSelector)
    // const isLoading = useAppSelector(BoxOfficeLoadedSelector)

    useEffect(() => {
        dispatch(fetchBoxOfficeTC())

    }, []);


    return (
        <Section>
            <SectionTitle title="Кассовые сборы">
                {formatDate(lastWeek.toISOString().split("T")[0])} — {formatDate(today.toISOString().split("T")[0])}
            </SectionTitle>

            <div className="grid grid-cols-10 gap-[42px] tabletLg:mt-[63px] mt-[30px]">
                {infoMovies && infoMovies.slice(0, 5).map((item, index) => (
                    <div className="col-span-2">
                        <ItemMovie item={item} index={index} />
                    </div>
                ))}
            </div>


        </Section>
    );
};