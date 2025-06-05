import { useState, type ReactNode } from "react";
import ToTopHologram from "../components/ToTopHologram";

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
    <div className="platform-container float-y-animation" style={{ paddingBottom: "10px" }}>

      <ToTopHologram open={open} isFloating={false}>
        <div className="plattform-ad outlined-text ">
          <h3>{title}</h3>
          {children}
        </div>
      </ToTopHologram>

      <button className="platform" onClick={handleClick}>
        {open && <img src="/ui/plattform-on.svg" alt="ad" className="plattform-img" />}
        {!open && <img src="/ui/plattform-off.svg" alt="ad" className="plattform-img" />}
      </button>
    </div>
  );
};

