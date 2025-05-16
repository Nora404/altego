// HologramPanel.tsx
import { useState } from "react";
import "./HologramPanel.css";

export default function HologramPanel() {
  const [active, setActive] = useState(false);

  return (
    <div className="hologram-wrapper">
      <button
        className={`hologram-toggle ${active ? "active" : ""}`}
        onClick={() => setActive((a) => !a)}
      >
        Toggle Hologram
      </button>

      <div className={`hologram-bg ${active ? "open" : ""}`}>
        <p>Holographische Nachricht</p>
      </div>
    </div>
  );
}
