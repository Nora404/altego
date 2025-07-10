import React, { useState } from "react";
import HologramPanel from "./HologramPanel";
import { NavLink } from "react-router-dom";
import type { MenuItem } from "../../data/MenuData";

interface MenuProps {
  data: readonly MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ data }) => {
  const [openPanelTitle, setOpenPanelTitle] = useState<string | null>(null);

  return (
    <div>
      {data.map(({ title, entries }) => (
        <HologramPanel
          key={title}
          title={title}
          panelWidth={200}
          open={openPanelTitle === title}
          setOpenPanel={() =>
            setOpenPanelTitle((prev) => (prev === title ? null : title))
          }
          closeAll={() => setOpenPanelTitle(null)}
        >
          {(close) =>
            entries.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => {
                  close();
                  setOpenPanelTitle(null); // sicherheitshalber schließen
                }}
                className="navigation-entries outlined-text"
              >
                {label}
              </NavLink>
            ))
          }
        </HologramPanel>
      ))}
    </div>
  );
};

export default Menu;
