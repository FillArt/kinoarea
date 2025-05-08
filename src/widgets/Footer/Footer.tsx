import {SocialButtons} from "@/widgets/Header/ui/Logo/SocialButtons/SocialButtons.tsx";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";
import {NavigationLinksType} from "@/widgets/Header/ui/Header.tsx";
import {SocialLinksType} from "@/widgets/Header/model/social.ts";
import {useTranslation} from "react-i18next";


export type FooterProps = {
    navigation: NavigationLinksType[];
    socialLinks: SocialLinksType[];
}

export const Footer = ({navigation, socialLinks}: FooterProps) => {
    const {t} = useTranslation('footer');
    return (
        <footer className="pt-[61px] pb-[51px]">
            <div className="container max-w-container order-1 mx-auto">
                <div className="flex justify-center w-full mb-[34px]">
                    <SocialButtons icons={socialLinks}/>
                </div>
                <div className="flex justify-center w-full mb-[40px]">
                    <Navigation
                        ulStyle="flex max-w-[523px] tabletLg:max-w-[750px] w-full justify-between"
                        links={navigation}/>
                </div>
                <div className="flex flex-col justify-center w-full text-center text-white gap-[25px]">
                    <span className="text-[#E3E6F0B8]">{t('law')}</span>
                    <a className="text-[#E3E6F0B8] underline" href="/">{t('privacy_policy')}</a>
                </div>

            </div>
        </footer>
    );
};
