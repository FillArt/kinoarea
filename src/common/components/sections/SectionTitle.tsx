import {ReactNode} from "react";

type SectionTitleProps = {
    title: string
    children: ReactNode
    line?: boolean
}

export const SectionTitle = ({title, children, line = true}: SectionTitleProps) => {
    return (
        <div className="flex phone:justify-between justify-center phone:gap-0 gap-[10px] font-bold tabletLg:items-center phone:items-baseline items-center phone:flex-col tabletLg:flex-row flex-row">
            <h2 className='tabletLg:text-titleFontSize phone:text-[40px] text-[32px]'>{title}</h2>
            {line && <div className="tabletLg:block hidden"
                          style={{width: '51px', height: '2px', backgroundColor: 'white'}}></div>}
            {children}
        </div>
    );
};