import { type MouseEventHandler } from "react";
import ChevronIcon from "./ChevronIcon";
import "./MenuBtn.css";

interface MenuBtnProps {
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    chevron?: boolean;
    open?: boolean;
}

export default function MenuBtn({
    title,
    onClick,
    chevron = true,
    open = false,
}: Readonly<MenuBtnProps>) {
    return (
        <button className="metall-btn" onClick={onClick}>
            {chevron && <ChevronIcon open={open} />}
            {title}
        </button>
    );
}
