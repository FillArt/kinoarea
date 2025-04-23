import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
    children: ReactNode;
    containerId?: string;
};

export const Portal = ({ children, containerId = "modal-root" }: PortalProps) => {
    const container = document.getElementById(containerId);
    return container ? createPortal(children, container) : null;
};
