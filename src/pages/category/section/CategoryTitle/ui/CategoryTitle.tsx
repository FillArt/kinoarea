import Arrow from '../assets/arrow.svg'

import {capitalizeFirstLetter} from "@/shared/helpers/capitalizeFirstLetter.ts";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

type CategoryTitleProps = {
    genre: string,
    setPage: (page: number) => void
}

export const CategoryTitle = ({genre, setPage}: CategoryTitleProps) => {
    const { t } = useTranslation(['nameCategory', 'descriptionCategory']);  // Используем оба namespaces для перевода


    useEffect(() => {
        window.scrollTo(0, 0);
        setPage(1)
    }, [genre]);

    return (
        <div className="phone:text-left text-center">
            <h1 className="tabletLg:text-[65px] phone:text-[40px] text-[32px] font-black">{capitalizeFirstLetter(t(`${genre}`) ?? "")}</h1>
            <div className="flex gap-[10px] text-[16px] mb-[17px] font-medium phone:justify-normal justify-center">
                <NavLink className="text-[#4F5B7C] hover:text-blue-600 transition-all" to="/">{t('home')}</NavLink>
                <img src={Arrow} alt="decor"/>
                {capitalizeFirstLetter(t(`${genre}`) ?? "")}
            </div>
            <p className="mb-[30px] tabletLg:text-[18px] phone:text-[15px] text-[13px] max-w-[951px]">
                {t(`${genre}`, { ns: 'descriptionCategory' })}  {/* Используем t для получения описания */}
            </p>
        </div>
    );
};

