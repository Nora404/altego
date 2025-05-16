import { useState, type ReactNode } from "react";
import "./HologramPanel.css";
import ChevronIcon from "./ChevronIcon";

interface HologramPanelProps {
  title: string;
  children: ReactNode;
  panelHeight?: number;
  panelWidth?: number | string;
  roundedTopRight?: boolean;
}

export default function HologramPanel({
  title,
  children,
  panelHeight = 200,
  panelWidth = 150,
  roundedTopRight = false,
}: Readonly<HologramPanelProps>) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="hologram-wrapper"
      style={{
        width: typeof panelWidth === "number" ? `${panelWidth}px` : panelWidth,
      }}
    >
      <button
        className={`hologram-toggle ${active ? "active" : ""}`}
        onClick={() => setActive((a) => !a)}
        style={{
          borderTopRightRadius: roundedTopRight ? "30px" : "0px",
        }}
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
