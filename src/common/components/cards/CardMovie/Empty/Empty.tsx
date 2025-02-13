
import EmptyIcon from '@/common/components/cards/CardMovie/Empty/assets/empty.svg'


export const Empty = () => {
    return (
        <div className="flex flex-col items-center text-center ">
            <img src={EmptyIcon} className="mb-6" alt="Empty poster"/>
            <p className="text-descriptionFontSize text-emptyTextColor font-bold max-w-[230px]">К сожалению, Постер
                отсутствует</p>
        </div>
    );
};
