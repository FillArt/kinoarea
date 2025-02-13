import LogoIcon from './assets/logo.svg';
import {SocialLinksType} from "@/widgets/Header/model/social.ts";
import {SocialButtons} from "@/widgets/Header/ui/Logo/SocialButtons/SocialButtons.tsx";


type LogoProps = {
    socialLinks: SocialLinksType[];
}

export const Logo = ({socialLinks}: LogoProps) => {
    return (
        <div>
            <a href="/">
                <div className="flex items-center gap-[6px] mb-2">

                    <img src={LogoIcon} alt="Kinoarea Logo"/>

                    <strong className="text-descriptionFontSize text-white">
                        <span style={{color: '#3657CB'}}>Kino</span>
                        area
                    </strong>
                </div>
            </a>

            <SocialButtons icons={socialLinks}/>
        </div>

    );
};