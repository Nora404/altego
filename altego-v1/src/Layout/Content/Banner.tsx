import type { CSSProperties } from "react";
import "./Banner.css";

type BannerProps = {
    text?: string;   // Standard: "Buy Now"
    angle?: number;  // Steigung in Grad, Standard: 30
};

export const Banner = ({
    text = "Buy Now",
    angle = 30,
}: BannerProps) => (
    <span
        className="buy-banner"
        style={{ "--angle": `${angle}deg` } as CSSProperties}
    >
        {text}
    </span>
);


// Das Elternelement muss die Klasse "banner-parent" haben