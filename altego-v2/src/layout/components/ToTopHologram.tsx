import { useRef, useEffect, useState, type ReactNode } from "react";

interface ToDownHologramProps {
  open: boolean;
  children: ReactNode;
  isFloating?: boolean;
}

export default function ToDownHologram({
  open,
  children,
  isFloating = true,
}: Readonly<ToDownHologramProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string | number>("max-content");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Nach dem ersten Mount aktivieren wir das animierte Verhalten
    if (hasMounted) {
      setMaxHeight(open ? el.scrollHeight : 0);
    } else {
      setHasMounted(true);
    }
  }, [open, children, hasMounted]);

  const posClass = isFloating
    ? "position-down--floating"
    : "position-down--inline";

  return (
    <div
      ref={ref}
      className={`hologram-bg ${posClass}`}
      style={{
        maxHeight,
        transition: hasMounted ? "max-height 0.35s ease" : "none",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <hr className="neon-blue" />
      {children}
    </div>
  );
}
