import {NavigationLinksType} from "@/widgets/Header/model/navigationLinks.ts";

type NavigationProps = {
    links: NavigationLinksType[]
}

export const Navigation = ({links}: NavigationProps) => {
    return (
        <ul className="flex max-w-[750px] w-full justify-between">
            {links.map((link, i) => {
                const {title, link: url} = link;
                return (
                    <li key={i} className='text-white text-smallFontSize'>
                        <a href={url}>{title}</a>
                    </li>
                );
            })}
        </ul>
    )
};
