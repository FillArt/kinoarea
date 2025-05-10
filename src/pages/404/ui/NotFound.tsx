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
                <div className="text-white font-black leading-tight mb-[26px]">
                    <h1 className="text-[150px]">404</h1>
                    <p className="text-[50px]">{t('title')}</p>
                </div>
                <p className="text-[18px] mb-[32px]">{t('subtitle')}</p>
                <div className="flex gap-[15px] justify-center mb-[32px]">
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