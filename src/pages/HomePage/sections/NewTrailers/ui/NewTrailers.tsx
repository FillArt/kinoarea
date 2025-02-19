import {SectionTitle} from "@/common/components/sections/SectionTitle.tsx";
import {NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {useEffect, useState} from "react";
import {NewTrailersAPI} from "@/pages/HomePage/sections/NewTrailers/api/NewTrailers.ts";
import {MainPreview} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainPreview.tsx";

type NewTrailersProps = {
    movies: NowInCinemaType[];
}

export const NewTrailers = ({movies}: NewTrailersProps) => {

    const [mainPreviewKey, setMainPreviewKey] = useState('');

    useEffect(() => {
        if (!movies.length) return;

        const id = movies[0]?.id;
        if (id !== undefined) {
            const fetchNewTrailer = async () => {
                try {
                    const response = await  NewTrailersAPI.getTrailer(id);
                    setMainPreviewKey(response.data.results[0].key);
                } catch (e) {
                    console.error(`Ошибка загрузки постера: ${e}`);
                }
            }

            fetchNewTrailer();
        }
    }, [movies]);

    return (
        <section className="bg-backgroundColor text-white pt-6 mb-10">
            <div className="container max-w-container mx-auto">
                <SectionTitle line={false} title="Новые трейлеры"> Hello </SectionTitle>

                <div className="mt-14 grid">
                    {mainPreviewKey ? <MainPreview keyMain={mainPreviewKey} /> : 'Gecnj' }

                </div>

            </div>
        </section>
    );
};