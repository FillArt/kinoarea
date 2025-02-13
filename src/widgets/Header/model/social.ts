export type SocialLinksType = {
    key: string,
    link: string,
    icon: string,
}

import FacebookIcon from '../ui/Logo/SocialButtons/assets/fb.svg'
import InstagramIcon from '../ui/Logo/SocialButtons/assets/instagram.svg'
import LinkedinIcon from '../ui/Logo/SocialButtons/assets/linkedin.svg'
import TwitterIcon from '../ui/Logo/SocialButtons/assets/twitter.svg'


export const SocialLinks: SocialLinksType[] = [
    { key: 'facebook', link: '/' , icon: FacebookIcon },
    { key: 'instagram', link: '/' , icon: InstagramIcon },
    { key: 'linkedin', link: '/' , icon: LinkedinIcon },
    { key: 'twitter', link: '/' , icon: TwitterIcon },
];