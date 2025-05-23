// TVNoise.tsx
import React from "react";
import "./TVNoise.css";

interface TVNoiseProps {
  src: string;
  alt?: string;
}

const TVNoise: React.FC<TVNoiseProps> = ({ src, alt = "" }) => {
  return (
    <div className="tv">
      {/* Hintergrundbild */}
      <img src={src} alt={alt} className="tv__img" />

      {/* === Noise Overlay === */}
      <div className="tv__noise" />

      {/* === Scanlines + Fallende „Tears“ === */}
      <div className="tv__scanlines" />
    </div>
  );
};

export default TVNoise;
