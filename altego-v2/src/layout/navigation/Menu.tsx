import React from "react";
import HologramPanel from "./HologramPanel";
import { NavLink } from "react-router-dom";
import type { MenuItem } from "../../data/MenuData";

interface MenuProps {
  data: readonly MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ data }) => (
  <div>
    {data.map(({ title, entries }) => (
      <HologramPanel key={title} title={title} panelWidth={200}>
        {(close) =>
          entries.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={close}
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

export default Menu;
