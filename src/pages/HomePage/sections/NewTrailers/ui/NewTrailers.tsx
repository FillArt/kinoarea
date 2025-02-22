import {SectionTitle} from "@/common/components/sections/SectionTitle.tsx";
import {NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";
import {useEffect, useState} from "react";
import {NewTrailersAPI} from "@/pages/HomePage/sections/NewTrailers/api/NewTrailers.ts";
import {MainPreview} from "@/pages/HomePage/sections/NewTrailers/ui/MainPreview/MainPreview.tsx";
import {MovieSlider} from "@/pages/HomePage/sections/NewTrailers/ui/MovieSlider/MovieSlider.tsx";


type NewTrailersProps = {
    movies: NowInCinemaType[];
}

export type trailerType = {
    id: number,
    posterUrl: string,
    trailer: {
        name: string,
        url: string,
    }
}

export const NewTrailers = ({movies}: NewTrailersProps) => {

    const [trailerMain, setTrailerMain] = useState<trailerType>()
    const [trailers, setTrailers] = useState<trailerType[]>([])


    const fetchMovieDetails = async (id: number | undefined) => {
        try {
            if (!id) return;

            const movieInfo = await NewTrailersAPI.getTrailer(id)
            const trailer = movieInfo.data.results[0]
            const posterUrl = `https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`

            return {
                id,
                posterUrl,
                trailer: {
                    name: trailer.name,
                    url: `https://www.youtube.com/watch?v=${trailer.key}`
                }
            }

        } catch (e) {
            console.error(`Ошибка загрузки данных о фильме: ${e}`);
        }
    }
    const fetchAllTrailers = async () => {
        try {
            const movieDetailPromises = movies.map(movie => fetchMovieDetails(movie.id))
            const results = await Promise.all(movieDetailPromises);

            return results.filter((result): result is trailerType => result !== undefined);

        } catch (e) {
            console.error(`Ошибка загрузки всех трейлеров: ${e}`);
            return [];
        }
    }


    useEffect(() => {
        if (!movies.length) return;

        const fetchTrailers = async () => {
            try {
                const trailers = await fetchAllTrailers();
                setTrailerMain(trailers[0]);
                setTrailers(trailers.slice(1));

            } catch (e) {
                console.error(`Ошибка загрузки всех трейлеров: ${e}`);
            }
        }

        fetchTrailers()

        console.log(trailerMain, 'Главный трейлер.')
        console.log(trailers, 'Все остальные.')
    }, [movies]);

    return (
        <section className="bg-backgroundColor text-white pt-6 mb-10 font-main ">
            <div className="container max-w-container mx-auto">
                <SectionTitle line={false} title="Новые трейлеры"> Hello </SectionTitle>

                <div className="mt-14 grid">
                    <MainPreview trailerMain={trailerMain}/>
                    <MovieSlider movies={trailers} />
                    {/*<MovieSlider />*/}

                    {/*<div className="">*/}
                    {/*    <Slider {...settings} className="max-w-[1500px] mx-auto w-full">*/}
                    {/*        {trailers.map(trailer => {*/}
                    {/*            return (*/}
                    {/*                <div className="max-w-[345px]">*/}
                    {/*                    <img src={trailer.posterUrl} alt=""/>*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </Slider>*/}
                    {/*</div>*/}



                </div>

            </div>
        </section>
    );
};