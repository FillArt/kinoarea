import {ReactNode} from "react";
import {Header} from "@/widgets/Header";
import {SocialLinks} from "@/widgets/Header/model/social.ts";

import BgImg from '@/shared/layouts/assets/bg.png'
import {NavigationLinksType} from "@/widgets/Header/ui/Header.tsx";

interface HomeLayoutProps {
    children: ReactNode;
}


export const HomePageLayout = ({children}: HomeLayoutProps) => {

    const navigationLinks: NavigationLinksType[] = [
        {title: 'Афиша', link: '/poster'},
        {title: 'Фильмы', link: '/movies'},
        {title: 'Актёры', link : '/actors'},
        {title: 'Новости', link: '/news'},
        {title: 'Подборки', link: '/collections'},
        {title: 'Категории', link: '/categories'}
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
            {children}
            <div>Footer</div>
        </div>
    );
};