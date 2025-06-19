import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import type { MenuItem } from "../../data/MenuData";

interface MenuProps {
  data: readonly MenuItem[];
  onClose?: () => void;
}

const MobileMenu: React.FC<MenuProps> = ({ data, onClose }) => {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpenTitle((prev) => (prev === title ? null : title));
  };

  return (
    <div className="mobile-menu-scrollbox">
      {data.map(({ title, entries }) => (
        <div key={title}>
          <div className="mobile-entries" onClick={() => toggle(title)}>
            {title}
          </div>
          {openTitle === title && (
            <>
              {entries.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="mobile-subentries outlined-text"
                  onClick={onClose}
                >
                  {label}
                </NavLink>
              ))}
            </>
          )}
        </div>
      ))}
      <hr />
    </div>
  );
};


export default MobileMenu;
