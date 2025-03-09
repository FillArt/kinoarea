import {ReactNode} from "react";
import {Header} from "@/widgets/Header";

import {navigationLinks} from "@/widgets/Header/model/navigationLinks.ts";
import {SocialLinks} from "@/widgets/Header/model/social.ts";

import BgImg from './assets/bg.png'

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomePageLayout = ({children}: HomeLayoutProps) => {


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