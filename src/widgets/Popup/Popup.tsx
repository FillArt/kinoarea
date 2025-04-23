import {Logo} from "@/widgets/Header/ui/Logo/Logo.tsx";
import {ReactNode, useEffect} from "react";
import {ButtonIcon} from "@/shared/ui/buttons/ButtonIcon.tsx";
import Icon from "./assets/close.svg"
import {Portal} from "@/shared/ui/sections/Portal.tsx";


type PopupProps = {
    isShow: boolean,
    setShow: (show: boolean) => void,
    children?: ReactNode
}

export const Popup = ({isShow, setShow, children}: PopupProps) => {
    console.log("Popup mounted:", isShow);
    const styleHidden = isShow ? "block" : "hidden"

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isShow]);

    if (!isShow) return null;

    return (
        <Portal>
            <div onClick={() => setShow(false)}
                 className={`${styleHidden} z-50 bg-backgroundColor bg-opacity-95 h-screen w-screen min-w-full min-h-full py-[32px] tabletLg:py-8 fixed`}>
                <div className="container mx-auto ">
                    <div className="flex justify-center relative">
                        <Logo/>

                        <div className="absolute right-4 bottom-2">
                            <ButtonIcon onClick={() => setShow(false)} style="secondary">
                                <img src={Icon} width="12px" height="12px" alt="Close Popup"/>
                            </ButtonIcon>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};