import {Select, SelectItem} from "@/shared/ui/inputs/Select.tsx";
import {useTranslation} from "react-i18next";

export const CategoryFilter = () => {

    const {t} = useTranslation('filterCategory')

    const filterArray: SelectItem[] = [
        { key: 'imdb_rating', label: t('imdb_rating') },
        { key: 'year', label: t('year') },
        { key: 'popularity', label: t('popularity') }
    ];

    return (
        <div className="ml-[25px] flex items-center">
            <span className="inline-block mr-[20px] w-full">{t('sort')}</span>
            <Select array={filterArray} />
        </div>
    );
};