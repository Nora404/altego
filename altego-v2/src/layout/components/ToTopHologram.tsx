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
  // Anfangszustand: max-content (wächst so, wie der Inhalt ist)
  const [maxHeight, setMaxHeight] = useState<string | number>("max-content");
  // Wir merken uns, ob wir schon einmal gemessen/animiert haben
  const [hasAnimated, setHasAnimated] = useState(false);

  /**
   * Utility, um scrollHeight zu messen UND in maxHeight zu schreiben.
   * Das rufen wir auf, sobald wir sicher sind, dass alle Bilder fertig sind.
   */
  const measureAndSet = () => {
    const el = ref.current;
    if (!el) return;
    setMaxHeight(el.scrollHeight);
    setHasAnimated(true);
  };

  /**
   * useLayoutEffect, weil wir die Messung noch im Layout-Zyklus durchführen wollen,
   * bevor der Browser paintet. Dabei werten wir im ersten Schritt ab:
   * 
   * 1. Erster Mount & open===true  → noch nicht gemessen: 
   *    → prüfe, ob <img> drin sind, warte auf deren ′load′, dann measureAndSet().
   * 2. open von false→true (bereits hasAnimated===true) → 
   *    → ein RAF, damit der DOM „steht“, dann measureAndSet().
   * 3. open===false (egal, ob erster Mount oder später) → direkt auf 0px setzen.
   */
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ‣ Fall A: Erstes Mounten, open===true, noch nicht gemessen (hasAnimated===false)
    if (!hasAnimated && open) {
      // Wir wollen erst messen, wenn wirklich alle Bilder fertig sind.
      // 1. Sammle alle <img> in diesem Container:
      const imgs = Array.from(el.querySelectorAll("img")) as HTMLImageElement[];

      // 2. Hilfsvariable: Zähle, wie viele Bilder noch laden
      let imagesToLoad = imgs.filter((img) => !img.complete).length;

      // 3. Callback, der nach jedem Bild-Load ausgeführt wird:
      const onOneLoaded = () => {
        imagesToLoad--;
        if (imagesToLoad <= 0) {
          // Sobald alle Bilder geladen sind, warten wir noch einen Frame:
          requestAnimationFrame(() => {
            measureAndSet();
          });
        }
      };

      // 4. Wenn kein Bild oder alle schon fertig, messen wir sofort (eben im Layout Cycle)
      if (imagesToLoad === 0) {
        // Aber selbst dann packen wir die finale Messung noch in einen RAF-Call,
        // damit wir sicher den allerletzten Layout-Zustand erwischen:
        requestAnimationFrame(() => {
          measureAndSet();
        });
      } else {
        // 5. Sonst: Für jedes Bild, das noch nicht geladen ist, 
        //    Listener anfügen, um onOneLoaded bei load zu feuern:
        imgs.forEach((img) => {
          if (!img.complete) {
            img.addEventListener("load", onOneLoaded, { once: true });
            // Falls es schon im Browsercache ist, wird 'load' direkt 
            // oder fast direkt (bald) getriggert → onOneLoaded().
          }
        });
      }

      return; // Ende von Fall A – wir wollen NICHT sofort weiter zu den anderen Fällen springen
    }

    // ‣ Fall B: Nach dem ersten Mess-Durchgang (hasAnimated===true) und open von false→true:
    if (hasAnimated && open) {
      // Auch hier packen wir die Messung minimal in einen RAF,
      // damit Unter-DOM (z.B. neues Kinder-markup) wirklich steht:
      requestAnimationFrame(() => {
        measureAndSet();
      });
      return;
    }

    // ‣ Fall C: open===false → direkt maxHeight auf 0 setzen, keine Animation stoppen
    if (!open) {
      setMaxHeight(0);
      return;
    }

    // Alle anderen Fälle (z.B. hasAnimated===false && open===false 
    // oder hasAnimated===true && open===true mit nichts zu tun) 
    // tun nichts, weil z.B. wir beim ersten Render schon max-content haben wollen.
  }, [open, children, hasAnimated]);

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
