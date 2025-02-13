type ButtonPropsType = {
    title: string;
    onClick: () => void;
    disable?: boolean;
    style?: 'primary' | 'secondary' | 'card'; // Если есть другие стили, добавляем их
};

export const ButtonBase = ({title, onClick, disable = false, style = 'primary'}: ButtonPropsType) => {

    const onClickHandler = () => {
        if (!disable) {
            onClick();
        }
    };

    const classNamePrepare = style === 'primary'
        ? 'bg-formElementColor text-white hover:shadow-hoverDefaultButton'
        : style === 'secondary' ? 'bg-accentButtonColor text-black'
            : style === 'card' ? 'bg-white text-formTextColor' : '';

    return (
        <button
            disabled={disable}
            className={`${classNamePrepare} py-13 px-45 transition-opacity font-bold duration-300 rounded-[10px]`}
            onClick={onClickHandler}>
            {title}
        </button>
    );
};
