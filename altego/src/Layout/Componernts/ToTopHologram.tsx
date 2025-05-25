import { useRef, useEffect, useState, type ReactNode } from "react";
import "./Hologram.css";


interface ToTopHologramProps {
    open: boolean;
    children: ReactNode;
    /** true = über Layout schweben, false = Layout verschieben */
    isFloating?: boolean;
}

export default function ToTopHologram({
    open,
    children,
    isFloating = true,
}: Readonly<ToTopHologramProps>) {
    const ref = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        setMaxHeight(open ? el.scrollHeight : 0);
    }, [open, children]);

    const posClass = isFloating
        ? "position-top--floating"
        : "position-top--inline";

    return (
        <div
            ref={ref}
            className={`hologram-bg ${posClass}`}
            style={{
                maxHeight,
                overflow: "hidden",
                transformOrigin: "bottom",
                transform: open ? "scaleY(1)" : "scaleY(0)",
                transition: "max-height 0.35s ease, transform 0.35s ease",
            }}
        >
            {children}
            <hr className="neon-blue" />
        </div>
    );
}
