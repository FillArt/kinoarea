import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {useEffect, useState} from "react";


import ArrowIcon from '../assets/arrow.svg'
import {MainPreview} from "@/pages/home/sections/NewTrailers/ui/MainPreview/MainPreview.tsx";
import {MovieSlider} from "@/pages/home/sections/NewTrailers/ui/MovieSlider/MovieSlider.tsx";
import {movieAPI} from "@/shared/api/MovieAPI.ts";
import {MovieType} from "@/shared/types/MovieType.ts";

type NewTrailersProps = {
    movies: MovieType[];
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
    const [isVideoMode, setIsVideoMode] = useState(false)


    const fetchMovieDetails = async (id: number | undefined) => {
        try {
            if (!id) return;

            const movieInfo = await movieAPI.getTrailer(id)
            const trailer = movieInfo.data.results[0]
            const posterUrl = `https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`

            return {
                id,
                posterUrl,
                trailer: {
                    name: trailer.name,
                    url: trailer.key
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

    const chooseNextMovie = (idMovie: number) => {
        const findMovie = trailers.find((trailer) => trailer.id === idMovie)

        setTrailerMain(findMovie)
        setIsVideoMode(false)
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

    }, [movies]);

    return (
        <section className="bg-backgroundColor text-white pt-6 mb-10 font-main ">
            <div className="container max-w-container mx-auto">
                <SectionTitle line={false} title="Новые трейлеры" sectionVersion="two">
                    <a className="tabletLg:text-[22px] text-[18px] flex items-center" href="/">
                        Все трейлеры
                        <img src={ArrowIcon} alt="Стрелка" className="tabletLg:ml-[27px] ml-[14px] w-6 h-6"/>
                    </a>
                </SectionTitle>

                <div className="phone:mt-[32px] mt-[18px] grid">
                    <MainPreview videoMod={isVideoMode} setVideoMod={setIsVideoMode} trailerMain={trailerMain}/>
                    <MovieSlider onClick={chooseNextMovie} movies={trailers}/>
                </div>

            </div>
        </section>
    );
};