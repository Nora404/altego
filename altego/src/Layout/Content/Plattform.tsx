import type { ReactNode } from "react";
import "./Plattform.css";

type PlattformProps = {
    children: ReactNode;
    title?: string;
};

export const Plattform = ({ children, title = "" }: PlattformProps) => {
    return (
        <div className="platform-container flex-col-center float-y-animation">
            <div className="plattform-ad hologram-background">
                <h3>{title}</h3>
                {children}
            </div>
            <div className="platform">
                <img src="/assets/plattform.svg" alt="ad" className="plattform-img" />
            </div>
        </div>
    );
};

