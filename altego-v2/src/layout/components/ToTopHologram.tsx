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
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string | number>("max-content");
  const [hasAnimated, setHasAnimated] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !open) return;

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        if (ref.current) {
          setMaxHeight(ref.current.scrollHeight);
        }
      });
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [open]);

  // Initiale Messung nach Bild-Load
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!hasAnimated && open) {
      const imgs = Array.from(el.querySelectorAll("img")) as HTMLImageElement[];
      let imagesToLoad = imgs.filter((img) => !img.complete).length;

      const onOneLoaded = () => {
        imagesToLoad--;
        if (imagesToLoad <= 0) {
          requestAnimationFrame(() => {
            setMaxHeight(el.scrollHeight);
            setHasAnimated(true);
          });
        }
      };

      if (imagesToLoad === 0) {
        requestAnimationFrame(() => {
          setMaxHeight(el.scrollHeight);
          setHasAnimated(true);
        });
      } else {
        imgs.forEach((img) => {
          if (!img.complete) {
            img.addEventListener("load", onOneLoaded, { once: true });
          }
        });
      }

      return;
    }

    if (!open) {
      setMaxHeight(0);
    }
  }, [open, hasAnimated]);

  const posClass = isFloating
    ? "position-down--floating"
    : "position-down--inline";

  return (
    <div
      ref={ref}
      className={`hologram-bg ${posClass}`}
      style={{
        maxHeight,
        transition: hasAnimated ? "max-height 0.35s ease" : "none",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <hr className="neon-blue" />
      {children}
    </div>
  );
}
