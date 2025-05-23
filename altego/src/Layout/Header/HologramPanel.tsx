// HologramPanel.tsx
import { useState, useRef, useEffect, type ReactNode } from "react";
import "./HologramPanel.css";
import ChevronIcon from "./ChevronIcon";

interface HologramPanelProps {
  title?: string;
  children: ReactNode;
  panelWidth?: number | string;
  roundedTopRight?: boolean;
  chevron?: boolean;
  showBtn?: boolean;
  className?: string;
  direction?: "down" | "up";
  isOpen?: boolean;
}

export default function HologramPanel({
  title,
  children,
  panelWidth = 150,
  roundedTopRight = false,
  chevron = true,
  showBtn = true,
  className = "",
  direction = "down",
  isOpen = false,
}: Readonly<HologramPanelProps>) {
  const [open, setOpen] = useState(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    setMaxHeight(open ? el.scrollHeight : 0);
  }, [open, children]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`hologram-wrapper ${className}`}
      style={{
        width: typeof panelWidth === "number" ? `${panelWidth}px` : panelWidth,
      }}
    >
      {showBtn && (
        <button
          className="hologram-toggle"
          onClick={() => setOpen((o) => !o)}
          style={{ borderTopRightRadius: roundedTopRight ? "30px" : "0" }}
        >
          {chevron && <ChevronIcon open={open} />}
          {title}
        </button>
      )}

      <div
        ref={contentRef}
        className={`hologram-bg ${direction}`}
        style={{
          maxHeight,
          transition: "max-height 0.35s ease",
          ...(direction === "up"
            ? { position: "absolute", bottom: "100%", top: "auto" }
            : {}),
        }}
      >
        <hr />
        {children}
      </div>
    </div>
  );
}
