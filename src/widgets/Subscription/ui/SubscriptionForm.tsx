import {InputText} from "@/shared/ui/inputs/InputText.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {Checkbox} from "@/shared/ui/inputs/Checkbox.tsx";
import {useForm} from "react-hook-form";
import {validateEmail} from "@/widgets/Subscription/model/validate.ts";

type SubscriptionFormType = {
    email: string;
}

export const SubscriptionForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid, isSubmitted},
    } = useForm<SubscriptionFormType>({defaultValues: {email: ''}, mode: 'onChange'})


    const onSubmit = (data: SubscriptionFormType) => {
        console.log(data);
        reset()
    }


    return (
        <form method="post" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-[8px]">
                <InputText register={register('email', validateEmail)} error={errors.email} />
                <ButtonBase disable={isSubmitted && !isValid} onClick={handleSubmit(onSubmit)} title="Подписаться" style="secondary"/>
            </div>

            {errors.email && <span className="text-red-700 block font-bold mt-[10px]">{errors.email.message}</span>}

            <div className="justify-center flex gap-[10px] mt-[22px]">
                <Checkbox>
                    <span className="text-white text-[17px]">Соглашаюсь на условия  <a
                        className="text-[#F2F60F] hover:underline" href="/">политики конфиденциальности</a></span>
                </Checkbox>
            </div>
        </form>
    );
};
