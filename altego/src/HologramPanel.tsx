import { useState, type ReactNode } from "react";
import "./HologramPanel.css";
import ChevronIcon from "./ChevronIcon";

interface HologramPanelProps {
  title: string;
  children: ReactNode;
  panelHeight?: number;
}

export default function HologramPanel({
  title,
  children,
  panelHeight = 200,
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

      <div
        className={`hologram-bg ${active ? "open" : ""}`}
        style={{ height: active ? `${panelHeight}px` : "0px" }}
      >
        <div
          style={{ padding: "15px", paddingLeft: "30px", textAlign: "left" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
