import {useState} from "react";
import {SectionTitle} from "@/shared/ui/sections/SectionTitle.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {CardMovieSkeleton} from "@/shared/ui/cards";
import Icon from "@/shared/ui/buttons/assets/burgerWhite.svg";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import {NowInCinemaType} from "@/shared/types/NowInCinemaAPI.types.ts";
import {categoriesList} from "@/pages/home/sections/NowInCinema/model/categoriesList.ts";
import {CinemaList} from "@/pages/home/sections/NowInCinema/ui/CinemaList/CinemaList.tsx";


export type Filter = "all" | "action" | "adventures" | "comedy" | "fantasy" | "thrillers" | "drama";


type NowInCinemaProps = {
    movies: NowInCinemaType[],
    loading: boolean,
    allMoviesHandler: () => void,

}

export const NowInCinema = ({movies, loading, allMoviesHandler}: NowInCinemaProps) => {
    const [filter, setFilter] = useState<Filter>("all");
    const [isShowButton, setIsShowButton] = useState<boolean>(true);

    const onClickHandler = (filter: Filter) => {
        setFilter(filter);
        showMoreMovies()
    }

    const showMoreMovies = () => {
        allMoviesHandler()
        setIsShowButton(false)
    };


    return (
        <section className="font-main  pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">

                <SectionTitle title={"Сейчас в кино"}>
                    <div className="tabletLg:max-w-[765px] max-w-[615px] w-full phone:flex hidden justify-between">
                        {categoriesList.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => onClickHandler(item.key as Filter)}
                                className={`${
                                    filter === item.key ? "opacity-100" : "opacity-50"
                                } tabletLg:text-smallFontSize text-[15px]`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    <div className="phone:hidden block mt-[8px]">
                        <ButtonIcon onClick={() => alert('Заглушка')} style="secondary">
                            <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                        </ButtonIcon>
                    </div>

                </SectionTitle>

                {loading ? (
                    <div className="mt-14 grid grid-cols-12 gap-[23px]">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="col-span-3">
                                <CardMovieSkeleton/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <CinemaList movies={movies} filter={filter}/>
                )}


                {isShowButton && (
                    <div className="flex justify-center mt-14">
                        <ButtonBase title='Все новинки' style="border" onClick={() => showMoreMovies()}/>
                    </div>
                )}
            </div>
        </section>
    );
};
