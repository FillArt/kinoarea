// import LogoIcon from './assets/logo.svg';
import UsaLogoIcon from './assets/en.svg';
import RussiaLogoIcon from './assets/ru.svg';

import {SocialLinksType} from "@/widgets/Header/model/social.ts";
import {SocialButtons} from "@/widgets/Header/ui/Logo/SocialButtons/SocialButtons.tsx";
import {appLanguageSelector, setLanguage} from "@/app/AppSlice.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {baseApi} from "@/shared/api/baseApi.ts";


type LogoProps = {
    socialLinks?: SocialLinksType[];
}

export const Logo = ({socialLinks}: LogoProps) => {

    const dispatch = useAppDispatch();
    const language = useAppSelector(appLanguageSelector)
    const currentImage = language === 'en' ?  UsaLogoIcon : RussiaLogoIcon;

    const onClickHandler = () => {
        dispatch(setLanguage(language === 'en' ? 'ru' : 'en'));
        dispatch(baseApi.util.resetApiState()); // сброс и повторные запросы
    }

    return (
        <div>

            <div className="flex items-center gap-[6px] mb-2 tabletLg:justify-normal justify-center">

                <img onClick={() => onClickHandler()} src={currentImage} width="24px" height="24px" className="hover:opacity-50 cursor-pointer" alt="Kinoarea Logo"/>

                <a href="/">
                    <strong className="tabletLg:text-descriptionFontSize text-[19px] text-white">
                        <span style={{color: '#3657CB'}}>Kino</span>
                        area
                    </strong>
                </a>
            </div>


            {socialLinks && <SocialButtons icons={socialLinks}/>}
        </div>

    );
};