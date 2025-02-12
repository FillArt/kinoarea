import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {navigationLinks} from "@/widgets/Header/model/navigationLinks.ts";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";

export const Header = () => {
    return (
        <header className="font-main">
            <div style={{ 'outline': '1px solid red' }} className="container max-w-container mx-auto grid grid-cols-12">
                <div className="col-span-2">
                    <Logo  />
                </div>
                <div className="col-span-8 flex items-center justify-center">
                    <Navigation links={navigationLinks} />
                </div>
                <div className="col-span-2 flex items-center justify-end">
                    Buttons
                </div>
            </div>
        </header>
    );
};
