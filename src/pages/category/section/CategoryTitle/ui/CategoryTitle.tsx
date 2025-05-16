import Arrow from '../assets/arrow.svg'
import ColIcon from '../assets/col.svg'
import TableIcon from '../assets/table.svg'

import {capitalizeFirstLetter} from "@/shared/helpers/capitalizeFirstLetter.ts";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {CategoryFilter} from "@/pages/category/section/CategoryTitle/ui/CategoryFilter.tsx";

type CategoryTitleProps = {
    genre: string,
    setPage: (page: number) => void
    setStyle: (style: 'col' | 'row') => void
    style: 'col' | 'row'
}

export const CategoryTitle = ({genre, setPage, style, setStyle}: CategoryTitleProps) => {
    const { t } = useTranslation(['nameCategory', 'descriptionCategory']);  // Используем оба namespaces для перевода


    useEffect(() => {
        window.scrollTo(0, 0);
        setPage(1)
    }, [genre]);

    return (
        <div className="phone:text-left text-center">
            <div className="flex items-center phone:justify-between justify-center gap-[16px]">
                <h1 className="tabletLg:text-[65px] phone:text-[40px] text-[32px] font-black">{capitalizeFirstLetter(t(`${genre}`) ?? "")}</h1>

                <div className="flex gap-[9px]">
                    <CategoryFilter />

                    <button className={ style === 'row' ? 'opacity-100' : 'opacity-35' } onClick={() => setStyle('row')}>
                        <img src={TableIcon} alt=""/>
                    </button>

                    <button className={ style === 'col' ? 'opacity-100' : 'opacity-35' } onClick={() => setStyle('col')}>
                        <img src={ColIcon} alt=""/>
                    </button>
                </div>
            </div>

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

