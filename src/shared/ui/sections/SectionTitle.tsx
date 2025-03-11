import {ReactNode} from "react";

type SectionTitleProps = {
    title: string
    children: ReactNode
    line?: boolean
    sectionVersion?: 'one' | 'two'
}

export const SectionTitle = ({title, children, line = true, sectionVersion = 'one'}: SectionTitleProps) => {
    const styleOne: string = 'tabletLg:flex-row phone:flex-col flex-row tabletLg:items-center phone:items-baseline items-center'
    const styleTwo: string = 'phone:flex-row flex-col items-center'

    const resultStyle = sectionVersion === 'one' ? styleOne : styleTwo

    return (
        <div className={`flex font-bold phone:justify-between justify-center  phone:gap-0 gap-[10px] ${resultStyle}`}>


            <h2 className='tabletLg:text-titleFontSize phone:text-[40px] text-[32px]'>{title}</h2>
            {line && <div className="tabletLg:block hidden"
                          style={{width: '51px', height: '2px', backgroundColor: 'white'}}></div>}
            {children}
        </div>
    );
};