import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";
import {SocialLinksType} from "@/widgets/Header/model/social.ts";

import SearchIcon from "@/shared/ui/buttons/assets/search.svg";
import BurgerIcon from "@/shared/ui/buttons/assets/burger.svg";

import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import {ButtonBase} from "@/shared/ui/buttons/ButtonBase.tsx";
import Popup from "@/widgets/Header/ui/Popup/Popup.tsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export type NavigationLinksType = {
    title: string,
    link: string,
}

export type HeaderProps = {
    navigation: NavigationLinksType[];
    socialLinks: SocialLinksType[];
    authFunc: () => void;
    searchFunc: () => void;
}

export const Header = ({navigation, socialLinks, authFunc, searchFunc}: HeaderProps) => {

    const [isShowPopup, setShowPopup] = useState(false);
    const {t} = useTranslation('header');

    return (
        <>
            <Popup isShow={isShowPopup} setShow={setShowPopup}>
                <Navigation
                    ulStyle="flex flex-col items-center mt-5 gap-[20px]"
                    links={navigation}/>
            </Popup>

            <header className="font-main phone:py-5 py-[11px]">
                <div className="container max-w-container order-1 mx-auto grid grid-cols-12">
                    <div
                        className="tabletLg:col-span-2 tabletLg:justify-normal flex justify-center phone:col-span-10 col-span-8 tabletLg:order-1 order-2">
                        <Logo socialLinks={socialLinks}/>
                    </div>
                    <div
                        className="tabletLg:col-span-8 none hidden phone:flex tabletLg:order-2 order-4 col-span-12 tabletLg:mt-0 mt-7 items-center justify-center">

                        <Navigation
                            ulStyle="flex max-w-[523px] tabletLg:max-w-[750px] w-full justify-between"
                            links={navigation}/>
                    </div>

                    <div
                        className="phone:col-span-1 tabletLg:hidden col-span-2 tabletLg:order-3 order-1 flex gap-[5px] items-center tabletLg:justify-end">
                        <ButtonIcon customStyle="phone:hidden" onClick={() => setShowPopup(true) }>
                            <img src={BurgerIcon} alt=""/>
                        </ButtonIcon>

                        <ButtonIcon onClick={searchFunc}>
                            <img src={SearchIcon} alt=""/>
                        </ButtonIcon>
                    </div>

                    <div
                        className="tabletLg:col-span-2 tabletLg:gap-[12px] phone:col-span-1 col-span-2 tabletLg:order-4 order-3 flex items-center justify-end">
                        <ButtonIcon customStyle="hidden tabletLg:flex" onClick={searchFunc}>
                            <img src={SearchIcon} className="" width="17px" height="17px" alt=""/>
                        </ButtonIcon>

                        <ButtonBase title={t('sing_in')} onClick={authFunc}/>
                    </div>
                </div>
            </header>
        </>
    );
};
