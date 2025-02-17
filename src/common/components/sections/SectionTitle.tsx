import {ReactNode} from "react";

type SectionTitleProps = {
    title: string
    children: ReactNode
}

export const SectionTitle = ({title, children}: SectionTitleProps) => {
    return (
        <div className="flex justify-between font-bold tabletLg:items-center items-baseline flex-col tabletLg:flex-row">
            <h2 className='tabletLg:text-titleFontSize text-[40px]'>{title}</h2>
            <div className="tabletLg:block hidden" style={{width: '51px', height: '2px', backgroundColor: 'white'}}></div>
            {children}
        </div>
    );
};