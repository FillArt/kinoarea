import {ReactNode} from "react";

type ButtonPropsType = {
    children: ReactNode;
    onClick: () => void;
    disable?: boolean;
    style?: 'primary' | 'secondary'; // Если есть другие стили, добавляем их
};

export const ButtonIcon = ({children, onClick, disable = false, style = 'primary'}: ButtonPropsType) => {

    const onClickHandler = () => {
        if (!disable) {
            onClick();
        }
    };

    const classNamePrepare = style === 'primary'
        ? 'bg-white'
        : 'bg-black';

    return (
        <button
            disabled={disable}
            className={`${classNamePrepare} py-13 px-13 w-12 h-12 flex items-center justify-center box-border transition-opacity duration-300 rounded-[10px]`}
            onClick={onClickHandler}>
            {children}
        </button>
    );
};
