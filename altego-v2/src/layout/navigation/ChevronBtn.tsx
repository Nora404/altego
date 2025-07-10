import { type MouseEventHandler } from "react";
import ChevronIcon from "./ChevronIcon";

interface ChevronBtnProps {
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    chevron?: boolean;
    open?: boolean;
}

export default function ChevronBtn({
    title,
    onClick,
    chevron = true,
    open = false,
}: Readonly<ChevronBtnProps>) {

    return (
        <button onClick={onClick} style={{ fontSize: "1em" }} className="chevron-btn">
            {chevron && <ChevronIcon open={open} />}
            {title}
        </button>
    );
}
