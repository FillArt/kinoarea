import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {Navigation} from "@/widgets/Header/ui/Navigation/Navigation.tsx";
import {Buttons} from "@/widgets/Header/ui/Buttons/Buttons.tsx";

import {navigationLinks} from "@/widgets/Header/model/navigationLinks.ts";

export const Header = () => {
    return (
        <header style={{'outline': '1px solid red'}} className="font-main py-5">
            <div className="container max-w-container mx-auto grid grid-cols-12">
                <div className="col-span-2">
                    <Logo/>
                </div>
                <div className="col-span-8 flex items-center justify-center">
                    <Navigation links={navigationLinks}/>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                    <Buttons/>
                </div>
            </div>
        </header>
    );
};
