import {ReactNode} from "react";
import {Header} from "@/widgets/Header";

import {navigationLinks} from "@/widgets/Header/model/navigationLinks.ts";
import {SocialLinks} from "@/widgets/Header/model/social.ts";

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomePageLayout = ({children}: HomeLayoutProps) => {

    return (
        <>
            <Header navigation={navigationLinks} socialLinks={SocialLinks} />
            {children}
            <div>Footer</div>
        </>
    );
};