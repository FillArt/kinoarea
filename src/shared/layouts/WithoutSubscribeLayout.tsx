import {ReactNode} from "react";
import {Header} from "@/widgets/Header";
import {SocialLinks} from "@/widgets/Header/model/social.ts";
import {NavigationLinksType} from "@/widgets/Header/ui/Header.tsx";
import {useTranslation} from "react-i18next";
import {Footer} from "@/widgets/Footer";

interface  WithoutSubscribeProps {
    children: ReactNode;
}


export const WithoutSubscribeLayout = ({children}: WithoutSubscribeProps) => {

    const {t} = useTranslation('header');

    const navigationLinks: NavigationLinksType[] = [
        {title: t('poster'), link: '/poster'},
        {title: t('movies'), link: '/movies'},
        {title: t('actors'), link : '/actors'},
        {title: t('news'), link: '/news'},
        {title: t('collections'), link: '/collections'},
        {title: t('categories'), link: '/categories'}
    ]

    return (
        <div className="font-main">
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

                <Footer
                    navigation={navigationLinks}
                    socialLinks={SocialLinks}
                />
            </div>

        </div>
    );
};