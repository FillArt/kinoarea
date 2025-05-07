import {useTranslation} from "react-i18next";

export const SubscriptionDescription = () => {
    const {t} = useTranslation('footer');
    return (
        <div className="text-center">
            <h2 className="tabletLg:text-[50px] phone:text-[35px] text-[25px] font-bold tabletLg:mb-[26px] mb-[16px]">{t('title')}</h2>
            <p className="max-w-[700px] mx-auto tabletLg:mb-[34px] mb-[16px] tableLg:text-[22px] phone:text-[17px] text-[15px]">{t('subtitle')}</p>
        </div>
    );
};

