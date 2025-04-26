
import EmptyIcon from '@/shared/ui/cards/CardMovie/Empty/assets/empty.svg'

type EmptyProps = {
    noText?: boolean
}
export const Empty = ({noText = false}: EmptyProps) => {
    return (
        <div className="flex flex-col items-center text-center ">
            <img src={EmptyIcon} className="mb-6" alt="Empty poster"/>
            {!noText && <p className="text-descriptionFontSize text-emptyTextColor font-bold max-w-[235px]">К сожалению, Постер
                отсутствует</p>}
        </div>
    );
};
