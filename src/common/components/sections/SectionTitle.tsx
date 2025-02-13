import {ReactNode} from "react";

type SectionTitleProps = {
    title: string
    children: ReactNode
}

export const SectionTitle = ({title, children}: SectionTitleProps) => {
    return (
        <div className="flex justify-between font-bold items-center">
            <h2 className='text-titleFontSize'>{title}</h2>
            <div style={{width: '51px', height: '2px', backgroundColor: 'white'}}></div>
            {children}
        </div>
    );
};