import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode;
    backgroundTypeDark?: boolean;
}

export const Section = ({children, backgroundTypeDark = false} : SectionProps) => {

    const backgroundStyle = backgroundTypeDark ? 'bg-[#151A26] pb-10' : 'bg-backgroundColor mb-10';

    return (
        <section className={`font-main ${backgroundStyle} pt-6 text-white`}>
            <div className="container max-w-container mx-auto">
                {children}
            </div>
        </section>
    );
};