import {InputText} from "@/shared/ui/inputs/InputText.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {Checkbox} from "@/shared/ui/inputs/Checkbox.tsx";

export const SubscriptionForm = () => {
    return (
        <form action="">
            <div className="flex gap-[8px] mb-[22px]">
                <InputText />
                <ButtonBase onClick={() => {}} title="Подписаться" style="secondary"/>
            </div>

            <div className="justify-center flex gap-[10px]">
                <Checkbox>
                    <span className="text-white text-[17px]">Соглашаюсь на условия  <a className="text-[#F2F60F] hover:underline" href="/">политики конфиденциальности</a></span>
                </Checkbox>
            </div>
        </form>
    );
};
