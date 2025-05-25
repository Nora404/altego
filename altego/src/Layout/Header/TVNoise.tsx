// TVNoise.tsx
import React from "react";
import "./TVNoise.css";

interface TVNoiseProps {
  src: string;
  alt?: string;
  running?: boolean;
}

const TVNoise: React.FC<TVNoiseProps> = ({ src, alt = "", running }) => {
  return (
    <div className="tv">
      {/* Hintergrundbild */}
      <div className={`tv__laufband${running ? " is-running" : ""}`}>
        <img src={src} alt={alt} className="tv__img" />
        <img src={src} alt={alt} className="tv__img" />
      </div>

      {/* === Noise Overlay === */}
      <div className="tv__noise" />

      {/* === Scanlines + Fallende „Tears“ === */}
      <div className="tv__scanlines" />
    </div>
  );
};

export default TVNoise;
