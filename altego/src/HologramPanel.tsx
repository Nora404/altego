import { useState, type ReactNode } from "react";
import "./HologramPanel.css";
import ChevronIcon from "./ChevronIcon";

interface HologramPanelProps {
  title: string;
  children: ReactNode;
}

export default function HologramPanel({
  title,
  children,
}: Readonly<HologramPanelProps>) {
  const [active, setActive] = useState(false);

  return (
    <div className="hologram-wrapper">
      <button
        className={`hologram-toggle ${active ? "active" : ""}`}
        onClick={() => setActive((a) => !a)}
      >
        <ChevronIcon open={active} />
        {title}
      </button>

      <div className={`hologram-bg ${active ? "open" : ""}`}>
        <div style={{ padding: "8px" }}>{children}</div>
      </div>
    </div>
  );
}
