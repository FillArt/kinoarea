import {InputText} from "@/shared/ui/inputs/InputText.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {Checkbox} from "@/shared/ui/inputs/Checkbox.tsx";
import {useForm} from "react-hook-form";
import {validateEmail} from "@/widgets/Subscription/model/validate.ts";
import {useTranslation} from "react-i18next";

type SubscriptionFormType = {
    email: string;
}

export const SubscriptionForm = () => {
    const {t} = useTranslation('footer');
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid, isSubmitted},
    } = useForm<SubscriptionFormType>({defaultValues: {email: ''}, mode: 'onChange'})


    const onSubmit = (data: SubscriptionFormType) => {
        console.log(data, 'Send Data!');
        reset()
    }


    return (
        <form method="post" onSubmit={(e) => e.preventDefault()}>
            <div className="flex phone:flex-row flex-col gap-[8px]">
                <InputText register={register('email', validateEmail)} error={errors.email} />
                <ButtonBase disable={isSubmitted && !isValid} onClick={handleSubmit(onSubmit)} title={t('button')} style="secondary"/>
            </div>

            {errors.email && <span className="text-red-700 block font-bold mt-[10px]">{errors.email.message}</span>}

            <div className="justify-center flex gap-[10px] mt-[22px]">
                <Checkbox>
                    <span className="text-white phone:text-[17px] text-[14px]">{t('agree')}  <a
                        className="text-[#F2F60F] hover:underline" href="/">{t('privacy_policy_agree')} </a></span>
                </Checkbox>
            </div>
        </form>
    );
};
