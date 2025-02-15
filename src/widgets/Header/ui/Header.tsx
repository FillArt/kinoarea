import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";

import {NavigationLinksType} from "@/widgets/Header/model/navigationLinks.ts";
import {SocialLinksType} from "@/widgets/Header/model/social.ts";

import SearchIcon from "@/common/components/buttons/assets/search.svg";
import BurgerIcon from "@/common/components/buttons/assets/burger.svg";

import {ButtonIcon} from "@/common/components/buttons/ButtonIcon.tsx";
import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";
import Popup from "@/widgets/Header/ui/Popup/Popup.tsx";
import {useState} from "react";

type HeaderProps = {
    navigation: NavigationLinksType[];
    socialLinks: SocialLinksType[];
}

export const Header = ({navigation, socialLinks}: HeaderProps) => {

    const [isShowPopup, setShowPopup] = useState(false);

    return (
        <>
            <Popup isShow={isShowPopup} setShow={setShowPopup}>
                <Navigation
                    ulStyle="flex flex-col items-center mt-5 gap-[20px]"
                    links={navigation}/>
            </Popup>

            <header className="font-main phone:py-5 py-[11px] bg-backgroundColor">
                <div className="container max-w-container order-1 mx-auto grid grid-cols-12">
                    <div
                        className="tabletLg:col-span-2 tabletLg:justify-normal flex justify-center phone:col-span-10 col-span-8 tabletLg:order-1 order-2">
                        <Logo socialLinks={socialLinks}/>
                    </div>
                    <div
                        className="tabletLg:col-span-7 none hidden phone:flex tabletLg:order-2 order-4 col-span-12 tabletLg:mt-0 mt-7 items-center justify-center">

                        <Navigation
                            ulStyle="flex max-w-[523px] tabletLg:max-w-[750px] w-full justify-between"
                            links={navigation}/>
                    </div>

                    <div
                        className="phone:col-span-1 col-span-2 tabletLg:order-3 order-1 flex gap-[5px] items-center tabletLg:justify-end">
                        <ButtonIcon customStyle="phone:hidden" onClick={() => setShowPopup(true) }>
                            <img src={BurgerIcon} alt=""/>
                        </ButtonIcon>

                        <ButtonIcon onClick={() => alert('Открыл поиск...')}>
                            <img src={SearchIcon} alt=""/>
                        </ButtonIcon>
                    </div>

                    <div
                        className="tabletLg:col-span-2 phone:col-span-1 col-span-2 tabletLg:order-4 order-3 flex items-center tabletLg:w-[150px] justify-end">
                        <ButtonBase title='Войти' onClick={() => alert('Вошёл')}/>
                    </div>
                </div>
            </header>
        </>
    );
};
