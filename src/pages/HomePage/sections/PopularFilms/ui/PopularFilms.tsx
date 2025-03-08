import {SectionTitle} from "@/common/components/sections/SectionTitle.tsx";
import {ButtonIcon} from "@/common/components/buttons/ButtonIcon.tsx";
import Icon from "@/common/components/buttons/assets/burgerWhite.svg";
import {useEffect, useState} from "react";
import {yearsList} from "@/pages/HomePage/sections/PopularFilms/model/yearsList.ts";
import {PopularSlider} from "@/pages/HomePage/sections/PopularFilms/ui/PopularSlider/PopularSlider.tsx";
import {NowInCinemaType} from "@/pages/HomePage/sections/NowInCinema/api/NowInCinemaAPI.types.ts";


type PopularFilmsProps = {
    movies: NowInCinemaType[]
}

export const PopularFilms = ({movies}: PopularFilmsProps) => {
    const [filter, setFilter] = useState("All");
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);


    const onClickHandler = ((filter: string) => {
        setFilter(filter);
        if(filter !== "All"){
            setFilteredMovies(movies.filter(movies => movies.release_date?.split('-')[0] === filter));
        } else {
            setFilteredMovies(movies)
        }
    })


    const prepareYearsList = ['All', ...yearsList];

    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                <SectionTitle title={"Популярные фильмы"}>
                    <div className="tabletLg:max-w-[490px] max-w-[408px] w-full phone:flex hidden justify-between">
                        {prepareYearsList.map((item) => (
                            <button
                                key={item}
                                onClick={() => onClickHandler(item as string)}
                                className={`${
                                    filter === item ? "opacity-100" : "opacity-50"
                                } tabletLg:text-smallFontSize text-[15px]`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="phone:hidden block mt-[8px]">
                        <ButtonIcon onClick={() => alert('Заглушка')} style="secondary">
                            <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                        </ButtonIcon>
                    </div>

                </SectionTitle>

                {filteredMovies.length > 0 ? (
                    <PopularSlider movies={filteredMovies} />
                ) : (
                    <p className="text-center text-gray-400">Фильмов нет</p>
                )}

            </div>
        </section>
    );
};