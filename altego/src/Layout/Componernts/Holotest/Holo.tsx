// Hologram.tsx
import React from "react";
import "./holo.css";

type HologramMaskProps = {
  /**
   * Path zum SVG als URL/String (Default-Import).
   * Bsp.: `import iconPath from './icons/mein-logo.svg'`.
   */
  icon: string;

  /**
   * Farbe der Glow-Linien (CSS-Farbstring).
   * Z.B. "#00ffff" oder "rgba(0,255,255,0.6)". Default = 'cyan'.
   */
  color?: string;

  /**
   * Breite des Wrappers in px (standardmäßig 200px).
   */
  width?: number;

  /**
   * Höhe des Wrappers in px (standardmäßig 200px).
   */
  height?: number;
};

const HologramMask: React.FC<HologramMaskProps> = ({
  icon,
  color = "cyan",
  width = 200,
  height = 200,
}) => {
  // 1) CSSProperties anlegen
  const style: React.CSSProperties = {};

  // 2) Custom-Variable für Linien-Farbe
  (style as any)["--holo-color"] = color;

  // 3) Custom-Variable für die Mask-URL
  (style as any)["--mask-url"] = `url(${icon})`;

  // 4) Größe des Wrappers (px)
  style.width = width;
  style.height = height;

  return (
    <div className="hologram-wrapper" style={style}>
      {/* 
      Diese Ebene erzeugt die animierten Linien,
      wird jedoch durch die Maske des Wrappers so beschnitten,
      dass nur die SVG-Form sichtbar bleibt.
    */}
      <div className="hologram-lines" />
    </div>
  );
};

export default HologramMask;
