// Hologram.tsx
import React from "react";
import "./holo.css";

type HologramMaskProps = {
  icon: string;
  color?: string;
  width?: number;
  height?: number;
};

const HologramMask: React.FC<HologramMaskProps> = ({
  icon,
  color = "cyan",
  width = 200,
  height = 200,
}) => {
  const style: React.CSSProperties = {};

  (style as any)["--holo-color"] = color;
  (style as any)["--mask-url"] = `url(${icon})`;

  style.width = width;
  style.height = height;

  return (
    <div className="hologram-wrapper" style={style}>
      <div className="hologram-lines" />
    </div>
  );
};

export default HologramMask;
