import { useRef, useEffect, useState, type ReactNode } from "react";
import "./Hologram.css";

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
    const ref = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        setMaxHeight(open ? el.scrollHeight : 0);
    }, [open, children]);

    const posClass = isFloating
        ? "position-down--floating"
        : "position-down--inline";

    return (
        <div
            ref={ref}
            className={`hologram-bg ${posClass}`}
            style={{
                maxHeight,
                transition: "max-height 0.35s ease",
                overflow: "hidden",
            }}
        >
            <hr className="neon-blue" />
            {children}
        </div>
    );
}
