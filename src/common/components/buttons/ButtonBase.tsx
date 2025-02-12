type ButtonPropsType = {
    title: string;
    onClick: () => void;
    disable?: boolean;
    style?: 'primary' | 'secondary'; // Если есть другие стили, добавляем их
};

export const ButtonBase = ({ title, onClick, disable = false, style = 'primary' }: ButtonPropsType) => {

    const onClickHandler = () => {
        if (!disable) {
            onClick();
        }
    };

    const classNamePrepare = style === 'primary'
        ? 'bg-formElementColor text-white hover:shadow-hoverDefaultButton'
        : 'bg-accentButtonColor text-black';

    return (
        <button
            disabled={disable}
            className={`${classNamePrepare} py-13 px-45 transition-opacity duration-300 rounded-[10px]`}
            onClick={onClickHandler}>
            {title}
        </button>
    );
};
