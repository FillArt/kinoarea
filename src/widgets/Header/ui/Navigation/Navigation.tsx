import {NavigationLinksType} from "@/widgets/Header/ui/Header.tsx";


type NavigationProps = {
    links: NavigationLinksType[],
    ulStyle: string,
}

export const Navigation = ({links, ulStyle}: NavigationProps) => {
    return (
        <ul className={ulStyle}>
            {links.map((link, i) => {
                const {title, link: url} = link;
                return (
                    <li key={i} className='text-white
                                        tabletLg:text-smallFontSize
                                        text-smallFontSizeTabletLg'>
                        <a href={url}>{title}</a>
                    </li>
                );
            })}
        </ul>
    )
};
