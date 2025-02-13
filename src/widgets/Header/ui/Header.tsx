import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";
import {Buttons} from "@/widgets/Header/ui/Buttons/Buttons.tsx";

import {NavigationLinksType} from "@/widgets/Header/model/navigationLinks.ts";
import {SocialLinksType} from "@/widgets/Header/model/social.ts";

type HeaderProps = {
    navigation: NavigationLinksType[];
    socialLinks: SocialLinksType[];
}

export const Header = ({navigation, socialLinks}: HeaderProps) => {
    return (
        <header className="font-main py-5 bg-backgroundColor">
            <div className="container max-w-container mx-auto grid grid-cols-12">
                <div className="col-span-2">
                    <Logo socialLinks={socialLinks} />
                </div>
                <div className="col-span-8 flex items-center justify-center">
                    <Navigation links={navigation}/>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                    <Buttons/>
                </div>
            </div>
        </header>
    );
};
