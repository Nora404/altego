import { useState, type ReactNode } from "react";
import "./Plattform.css";

type PlattformProps = {
  children: ReactNode;
  title?: string;
};

export const Plattform = ({ children, title = "" }: PlattformProps) => {
  const [active, setActive] = useState<boolean>(true);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="platform-container flex-col-center float-y-animation">
      <div className="plattform-ad hologram-background outlined-text ">
        <h3>{title}</h3>
        {children}
      </div>
      <button
        onClick={handleClick}
        className={`platform ${active && "platform-active"}`}
      >
        <img src="/assets/plattform.svg" alt="ad" className="plattform-img" />
      </button>
    </div>
  );
};
