import {ReactNode} from "react";

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomePageLayout = ({children}: HomeLayoutProps) => {
    return (
        <div>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </div>
    );
};