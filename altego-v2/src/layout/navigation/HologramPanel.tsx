// HologramPanel.tsx
import ChevronBtn from "./ChevronBtn";
import ToDownHologram from "../components/ToTopHologram";

type HologramPanelProps = {
  title: string;
  panelWidth?: number;
  chevron?: boolean;
  className?: string;
  open: boolean;
  setOpenPanel: () => void;
  closeAll: () => void;
  children: (close: () => void) => React.ReactNode;
};

export default function HologramPanel({
  title,
  children,
  panelWidth = 150,
  chevron = true,
  className = "",
  open,
  setOpenPanel,
  closeAll,
}: Readonly<HologramPanelProps>) {
  const closePanel = () => closeAll();

  return (
    <div
      className={`hologram-wrapper ${className}`}
      style={{
        width: typeof panelWidth === "number" ? `${panelWidth}px` : panelWidth,
      }}
    >
      <ChevronBtn
        title={title}
        onClick={setOpenPanel}
        chevron={chevron}
        open={open}
      />

      <ToDownHologram open={open}>{children(closePanel)}</ToDownHologram>
    </div>
  );
}
