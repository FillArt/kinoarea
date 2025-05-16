import {Select, SelectItem} from "@/shared/ui/inputs/Select.tsx";
import {useTranslation} from "react-i18next";
import {CategoryFilterType} from "@/pages/category/section/CategoryContent/ui/CategoryContent.tsx";

type CategoryFilterProps = {
    setValue: (filter: CategoryFilterType) => void
}

export const CategoryFilter = ({setValue}: CategoryFilterProps) => {

    const {t} = useTranslation('filterCategory')

    const filterArray: SelectItem<CategoryFilterType>[] = [
        { key: 'imdb_rating', label: t('imdb_rating') },
        { key: 'year', label: t('year') },
        { key: 'popularity', label: t('popularity') }
    ];

    return (
        <div className="ml-[25px] flex items-center">
            <span className="inline-block mr-[20px] phone:w-full min-w-[55px]">{t('sort')}</span>
            <Select<CategoryFilterType> array={filterArray} setValue={setValue}/>
        </div>
    );
};