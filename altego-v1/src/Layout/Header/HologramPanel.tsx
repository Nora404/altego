// HologramPanel.tsx
import { useState, useRef, useEffect, type ReactNode } from "react";
import "./HologramPanel.css";
import MenuBtn from "./MenuBtn";
import ToDownHologram from "../Componernts/ToDownHologram";
import ToTopHologram from "../Componernts/ToTopHologram";

interface HologramPanelProps {
  title: string;
  children: ReactNode;
  panelWidth?: number | string;
  chevron?: boolean;
  className?: string;
}

export default function HologramPanel({
  title,
  children,
  panelWidth = 150,
  chevron = true,
  className = "",
}: Readonly<HologramPanelProps>) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`hologram-wrapper ${className}`}
      style={{
        width: typeof panelWidth === "number" ? `${panelWidth}px` : panelWidth,
      }}
    >
      <MenuBtn
        title={title}
        onClick={() => setOpen((o) => !o)}
        chevron={chevron}
        open={open}
      />

      <ToDownHologram open={open}>
        {children}
      </ToDownHologram>
    </div>
  );
}
