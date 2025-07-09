// HologramPanel.tsx
import { useState, type ReactNode } from "react";
import ChevronBtn from "./ChevronBtn";
import ToDownHologram from "../components/ToTopHologram";

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
}: Readonly<
  HologramPanelProps & {
    children: (close: () => void) => React.ReactNode;
  }
>) {
  const [open, setOpen] = useState(false);

  const closePanel = () => setOpen(false);

  return (
    <div
      className={`hologram-wrapper ${className}`}
      style={{
        width: typeof panelWidth === "number" ? `${panelWidth}px` : panelWidth,
      }}
    >
      <ChevronBtn
        title={title}
        onClick={() => setOpen((o) => !o)}
        chevron={chevron}
        open={open}
      />

      <ToDownHologram open={open}>{children(closePanel)}</ToDownHologram>
    </div>
  );
}
