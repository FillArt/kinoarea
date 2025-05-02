
import EmptyIcon from '@/shared/ui/cards/CardMovie/Empty/assets/empty.svg'

type EmptyProps = {
    noText?: boolean,
    small?: boolean,
}
export const Empty = ({noText = false, small = false}: EmptyProps) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img width={!small ? "70px" : 'auto'} src={EmptyIcon} className={noText ? 'mb-0' : 'mb-6'} alt="Empty poster"/>
            {!noText && <p className="text-descriptionFontSize text-emptyTextColor font-bold max-w-[235px]">К сожалению, Постер
                отсутствует</p>}
        </div>
    );
};
