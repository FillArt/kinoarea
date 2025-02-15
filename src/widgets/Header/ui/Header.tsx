import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";

import {NavigationLinksType} from "@/widgets/Header/model/navigationLinks.ts";
import {SocialLinksType} from "@/widgets/Header/model/social.ts";
import SearchIcon from "@/common/components/buttons/assets/search.svg";
import {ButtonIcon} from "@/common/components/buttons/ButtonIcon.tsx";
import {ButtonBase} from "@/common/components/buttons/ButtonBase.tsx";

type HeaderProps = {
    navigation: NavigationLinksType[];
    socialLinks: SocialLinksType[];
}

export const Header = ({navigation, socialLinks}: HeaderProps) => {
    return (
        <header className="font-main py-5 bg-backgroundColor">
            <div className="container max-w-container order-1 mx-auto grid grid-cols-12">
                <div className="tabletLg:col-span-2 tabletLg:justify-normal flex justify-center col-span-8 tabletLg:order-1 order-2">
                    <Logo socialLinks={socialLinks}/>
                </div>
                <div className="tabletLg:col-span-7 tabletLg:order-2 order-4 col-span-12 tabletLg:mt-0 mt-7 flex items-center justify-center">
                    <Navigation links={navigation}/>
                </div>

                <div className="tabletLg:col-span-1 col-span-2 tabletLg:order-3 order-1 flex items-center tabletLg:justify-end">
                    <ButtonIcon onClick={() => alert('Открыл поиск...')}>
                        <img src={SearchIcon}  alt=""/>
                    </ButtonIcon>
                </div>

                <div className="tabletLg:col-span-2 col-span-2 tabletLg:order-4 order-3 flex items-center tabletLg:w-[150px] justify-end">
                    <ButtonBase title='Войти' onClick={() => alert('Вошёл')} />
                </div>
            </div>
        </header>
    );
};
