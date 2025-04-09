import {Section} from "@/shared/ui/sections/Section.tsx";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect} from "react";
import {movieAPI} from "@/shared/api/MovieAPI.ts";

export const BoxOffice = () => {

    useEffect(() => {
        const test = async () => {
            const today = new Date();
            const lastWeek = new Date();

            lastWeek.setDate(today.getDate() - 7);

            const res = await movieAPI.getDiscoverMovies({
                startDate: lastWeek.toISOString().split("T")[0],
                endDate: today.toISOString().split("T")[0],
            })

            const boxOfficeData = await Promise.all(
                res.data.results.map(async (item) => {
                    const details = await movieAPI.getInfoMovie(item.id);
                    return {
                        title: item.title,
                        revenue: details.data.revenue,
                        img: details.data.backdrop_path,
                    };
                })
            );

            console.log(boxOfficeData);
        }

        test()
    }, []);

    return (
        <Section>
            <SectionTitle title="Кассовые сборы">
                13 марта — 15 марта
            </SectionTitle>

            <h1>Hello World</h1>

        </Section>
    );
};