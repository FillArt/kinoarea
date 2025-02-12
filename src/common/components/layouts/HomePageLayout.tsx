import {ReactNode} from "react";
import {Header} from "../../../widgets/Header";

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomePageLayout = ({children}: HomeLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <div>Footer</div>
        </>
    );
};