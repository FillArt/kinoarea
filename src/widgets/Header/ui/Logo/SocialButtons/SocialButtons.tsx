import {SocialLinksType} from "@/widgets/Header/model/social.ts";

type SocialButtonsProps = {
    icons: SocialLinksType[]
}

export const SocialButtons = ({icons}: SocialButtonsProps) => {
    return (
        <div className="flex gap-[20px]">
            {icons.map((item, i) => {
                const {key ,link, icon } = item;
                return (
                    <a key={i} href={link} className="opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <img src={icon} width="18px" height="18px" alt={key}/>
                    </a>
                );
            })}
        </div>
    )
        ;
};
