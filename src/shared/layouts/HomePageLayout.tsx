import {ReactNode} from "react";
import {Header} from "@/widgets/Header";
import {SocialLinks} from "@/widgets/Header/model/social.ts";

import BgImg from '@/shared/layouts/assets/bg.png'
import {NavigationLinksType} from "@/widgets/Header/ui/Header.tsx";
import {useTranslation} from "react-i18next";
import {Subscription} from "@/widgets/Subscription/ui/Subscription.tsx";

interface HomeLayoutProps {
    children: ReactNode;
}


export const HomePageLayout = ({children}: HomeLayoutProps) => {

    const {t} = useTranslation('header');

    const navigationLinks: NavigationLinksType[] = [
        {title: t('poster'), link: '/poster'},
        {title: t('movies'), link: '/movies'},
        {title: t('actors'), link : '/actors'},
        {title: t('news'), link: '/news'},
        {title: t('collections'), link: '/collections'},
        {title: t('categories'), link: '/categories'}
    ]

    const imgStyle = {
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        // backgroundBlendMode: 'overlay',
    }

    return (
        <div style={imgStyle}>
            <Header
                navigation={navigationLinks}
                socialLinks={SocialLinks}
                authFunc={() => alert('Открываю форму входа ...')}
                searchFunc={() => alert('Открываю форму поиска ...')}
            />
            <main>
                {children}
            </main>

            <Subscription />

            <div>Footer</div>
        </div>
    );
};