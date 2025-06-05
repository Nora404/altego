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
        <button onClick={onClick}>
            {chevron && <ChevronIcon open={open} />}
            {title}
        </button>
    );
}
