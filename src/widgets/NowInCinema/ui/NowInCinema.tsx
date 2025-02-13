import {useState} from "react";
import {SectionTitle} from "@/common/components/sections/SectionTitle.tsx";
import {categoriesList} from "@/widgets/NowInCinema/model/categoriesList.ts";
import {ChinemaList} from "@/widgets/NowInCinema/ui/ChinemaList";

export type Filter = 'all' | 'action' | 'adventures' | 'comedy' | 'fantasy' | 'thrillers' | 'drama'

export const NowInCinema = () => {
    const [filter, setFilter] = useState<Filter>('all')

    const onClickHandler = (filter: Filter) => setFilter(filter)

    return (
        <section className="font-main bg-backgroundColor pt-6 text-white">
            <div className="container max-w-container mx-auto">

                <SectionTitle title={'Сейчас в кино'}>
                    <div className="max-w-[765px] w-full flex justify-between">
                        {categoriesList.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => onClickHandler(item.key as Filter)}
                                className={`${filter === item.key ? 'opacity-100' : 'opacity-50'} text-smallFontSize`}>
                                {item.title}
                            </button>
                        ))}
                    </div>
                </SectionTitle>

                <ChinemaList/>
            </div>
        </section>
    );
};