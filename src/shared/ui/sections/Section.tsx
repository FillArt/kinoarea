import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode;
}

export const Section = ({children} : SectionProps) => {
    return (
        <section className="font-main bg-backgroundColor pt-6 mb-10 text-white">
            <div className="container max-w-container mx-auto">
                {children}
            </div>
        </section>
    );
};