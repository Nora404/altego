import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import type { MenuItem } from "../../data/MenuData";

interface MenuProps {
  data: readonly MenuItem[];
}

const MobileMenu: React.FC<MenuProps> = ({ data }) => {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpenTitle((prev) => (prev === title ? null : title));
  };

  return (
    <div className="mobile-menu-scrollbox">
      <div className="mobile-entries">Login</div>
      <div className="mobile-entries">Register</div>
      <div className="mobile-entries">Sprache (DE)</div>
      <hr />
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
