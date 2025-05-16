import {ReactNode} from "react";
import {Header} from "@/widgets/Header";
import {SocialLinks} from "@/widgets/Header/model/social.ts";

import BgImg from '@/shared/layouts/assets/bg.png'
import {NavigationLinksType} from "@/widgets/Header/ui/Header.tsx";
import {useTranslation} from "react-i18next";
import {Subscription} from "@/widgets/Subscription/ui/Subscription.tsx";
import {Footer} from "@/widgets/Footer";

interface HomeLayoutProps {
    children: ReactNode;
    imgStatus: boolean
    imgPath?: string
    additionalShadow?: boolean
}


export const HomePageLayout = ({children, imgStatus, imgPath = BgImg, additionalShadow = false}: HomeLayoutProps) => {

    const {t} = useTranslation('header');

    const navigationLinks: NavigationLinksType[] = [
        {title: t('poster'), link: '/poster'},
        {title: t('movies'), link: '/movies'},
        {title: t('actors'), link: '/actors'},
        {title: t('news'), link: '/news'},
        {title: t('collections'), link: '/collections'},
        {title: t('categories'), link: '/categories'}
    ]

    const imgStyle = {
        backgroundImage: `
            ${additionalShadow ? 
            'linear-gradient(to top, rgba(30, 37, 56, 1), transparent), ' +
            'linear-gradient(to right, rgba(30, 37, 56, 0.5), transparent),' 
            : ''}
            url(${imgPath})
        `,
        backgroundSize: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div style={imgStatus ? imgStyle : undefined} className="font-main">
            <div id="modal-root"></div>

            <div className="flex flex-col justify-between h-[125vh]">
                <Header
                    navigation={navigationLinks}
                    socialLinks={SocialLinks}
                    authFunc={() => alert('Открываю форму входа ...')}
                    searchFunc={() => alert('Открываю форму поиска ...')}
                />

                <main>
                    {children}
                </main>

                <Subscription/>
                <Footer
                    navigation={navigationLinks}
                    socialLinks={SocialLinks}
                />
            </div>

        </div>
    );
};