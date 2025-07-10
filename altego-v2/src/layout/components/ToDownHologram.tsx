import type { ReactNode } from "react";

interface ToDownHologramProps {
    open: boolean;
    children: ReactNode;
    /** true = über Layout schweben, false = Layout verschieben */
    isFloating?: boolean;
}

export default function ToDownHologram({
    open,
    children,
    isFloating = true,
}: Readonly<ToDownHologramProps>) {
    const posClass = isFloating
        ? "position-down--floating"
        : "position-down--inline";
    return (
        <div className={`hologram-bg ${posClass} ${open ? "is-open" : ""}`}>
            <hr className="neon-blue" />
            {children}
        </div>
    );
}
