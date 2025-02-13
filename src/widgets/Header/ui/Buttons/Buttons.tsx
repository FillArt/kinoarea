import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";
import {ButtonIcon} from "@/common/components/buttons/ButtonIcon.tsx";

import SearchIcon from "@/common/components/buttons/assets/search.svg"

export const Buttons = () => {
    return (
        <div className="flex text-smallFontSize gap-[12px]">
            <ButtonIcon onClick={() => alert('Открыл поиск...')}>
                <img src={SearchIcon}  alt=""/>
            </ButtonIcon>
            <ButtonBase title='Войти' onClick={() => alert('Вошёл')} />
        </div>
    );
};
