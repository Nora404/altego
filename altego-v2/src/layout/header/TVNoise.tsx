// TVNoise.tsx
import React from "react";
import "./tv.css";

interface TVNoiseProps {
  src: string;
  alt?: string;
  running?: boolean;
}

const TVNoise: React.FC<TVNoiseProps> = ({ src, alt = "", running }) => {
  return (
    <div className="tv">
      <div className={`tv-laufband${running ? " is-running" : ""}`}>
        <img src={src} alt={alt} className="tv-img" />
        <img src={src} alt={alt} className="tv-img" />
      </div>

      <div className="tv-noise" />
      <div className="tv-scanlines" />
    </div>
  );
};

export default TVNoise;
