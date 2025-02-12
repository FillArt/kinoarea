import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";

export const Buttons = () => {
    return (
        <div className="text-smallFontSize">
            <ButtonBase title='Войти' onClick={() => alert('Вошёл')} />
        </div>
    );
};
