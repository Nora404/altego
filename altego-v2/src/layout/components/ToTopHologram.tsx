import { useRef, useLayoutEffect, useState, type ReactNode } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | string>(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Helper to update height
    const update = () => {
      setMaxHeight(open ? el.scrollHeight : 0);
      if (open && !hasAnimated) setHasAnimated(true);
    };

    // Observe size changes
    const observer = new ResizeObserver(() => requestAnimationFrame(update)); // 🔥 unified observer
    observer.observe(el);

    // Initial measure, including images
    update();
    const images = Array.from(el.querySelectorAll("img")) as HTMLImageElement[];
    let remaining = images.filter(img => !img.complete).length;
    if (remaining > 0) {
      images.forEach(img => {
        if (!img.complete) img.addEventListener("load", () => {
          if (--remaining === 0) requestAnimationFrame(update);
        }, { once: true });
      });
    }

    return () => observer.disconnect();
  }, [open]); // 🔥 single effect

  const positionClass = isFloating
    ? "position-down--floating"
    : "position-down--inline";

  return (
    <div
      ref={containerRef}
      className={`hologram-bg ${positionClass}`}
      style={{
        maxHeight,
        transition: hasAnimated ? "max-height 0.35s ease" : "none", // 🔥 delay transition until first animation
        overflow: "hidden",
        width: "100%",
      }}
    >
      <hr className="neon-blue" />
      {children}
    </div>
  );
}
