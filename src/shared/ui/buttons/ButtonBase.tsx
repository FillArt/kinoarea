type ButtonPropsType = {
    title: string;
    onClick: () => void;
    disable?: boolean;
    style?: 'primary' | 'secondary' | 'card' | 'border'; // Если есть другие стили, добавляем их
    className?: string;
};

export const ButtonBase = ({title, onClick, disable = false, style = 'primary', className=''}: ButtonPropsType) => {

    const onClickHandler = () => {
        if (!disable) {
            onClick();
        }
    };

    const disabledStyle = 'disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed'

    const classNamePrepare = style === 'primary'
        ? 'bg-formElementColor text-white hover:shadow-hoverDefaultButton'
        : style === 'secondary' ? 'bg-accentButtonColor text-black'
            : style === 'card' ? 'bg-white text-formTextColor' : style === 'border' ? 'bg-transparent border-2' : '';

    return (
        <button
            disabled={disable}
            className={`${classNamePrepare} ${className} ${disabledStyle}   tabletLg:py-[13px] tabletLg:px-[47px] phone:py-[10px] phone:px-[30px] px-[27px] py-[9px] transition-all ease-in-out font-bold tabletLg:text-[16px] text-smallFontSizeTabletLg duration-300 rounded-[10px]`}
            onClick={onClickHandler}>
            {title}
        </button>
    );
};
