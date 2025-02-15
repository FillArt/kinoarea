import {ReactNode} from "react";

type ButtonPropsType = {
    children: ReactNode;
    onClick: () => void;
    disable?: boolean;
    style?: 'primary' | 'secondary'; // Если есть другие стили, добавляем их
    customStyle?: string;
};

export const ButtonIcon = ({children, onClick, customStyle, disable = false, style = 'primary'}: ButtonPropsType) => {

    const onClickHandler = () => {
        if (!disable) {
            onClick();
        }
    };

    const classNamePrepare = style === 'primary'
        ? 'bg-white'
        : 'bg-transparent';

    return (
        <button
            disabled={disable}
            className={`${classNamePrepare} ${customStyle} phone:p-13  p-2 tabletLg:w-[55px] tabletLg:h-[50px]  phone:w-[40px] phone:h-[40px] w-[27px] h-[27px] flex items-center justify-center box-border transition-opacity duration-300 phone:rounded-[10px] rounded-[5px]`}
            onClick={onClickHandler}>
            {children}
        </button>
    );
};
