import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";

export const Header = () => {
    return (
        <header>
            <div style={{ 'outline': '1px solid red' }} className="container max-w-container mx-auto">
                <Logo />
            </div>
        </header>
    );
};
