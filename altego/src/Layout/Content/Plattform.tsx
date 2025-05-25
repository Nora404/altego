import { useState, type ReactNode } from "react";
import "./Plattform.css";
import ToTopHologram from "../Componernts/ToTopHologram";

type PlattformProps = {
  children: ReactNode;
  title?: string;
};

export const Plattform = ({ children, title = "" }: PlattformProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  }


  return (
    <div className="platform-container flex-col float-y-animation">

      <ToTopHologram open={open} isFloating={false}>
        <div className="plattform-ad outlined-text ">
          <h3>{title}</h3>
          {children}
        </div>
      </ToTopHologram>

      <button className="platform" onClick={handleClick}>
        {open && <img src="/assets/plattform.svg" alt="ad" className="plattform-img" />}
        {!open && <img src="/assets/plattform-off.svg" alt="ad" className="plattform-img" />}
      </button>
    </div>
  );
};

