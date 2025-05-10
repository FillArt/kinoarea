import {WithoutSubscribeLayout} from "@/shared/layouts";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const NotFound = () => {
    const navigate = useNavigate();
    const {t} = useTranslation('notFound');

    return (
        <WithoutSubscribeLayout>
            <div className="container text-center text-white ">
                <div className="text-white font-black leading-tight phone:mb-[26px] mb-[15px]">
                    <h1 className="phone:text-[150px] text-[100px]">404</h1>
                    <p className="phone:text-[50px] text-[40px]">{t('title')}</p>
                </div>
                <p className="phone:text-[18px] text-[15px] phone:mb-[32px] mb-[28px]">{t('subtitle')}</p>
                <div className="flex phone:flex-row flex-col gap-[15px] max-w-auto justify-center mb-[32px]">
                    <ButtonBase
                        title={t('come_back')}
                        onClick={() => navigate("/kinoarea")}
                    />
                    <ButtonBase
                        title={t('search')}
                        onClick={() => alert('Открываю форму поиска ...')}
                        style="border"
                        className="text-white"
                    />
                </div>
            </div>
        </WithoutSubscribeLayout>
    );
};