import React from "react";
import { NavLink } from "react-router-dom";
import type { MenuItem } from "../../data/MenuData";

interface MenuProps {
  data: readonly MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ data }) => (
  <div>
    <div className="mobile-entries">Loggin</div>
    <div className="mobile-entries">Sprache (DE)</div>
    <hr />
    {data.map(({ title, entries }) => (
      <div key={title} className="mobile-entries">
        {title}
      </div>
    ))}
    <hr />
    <div className="mobile-entries">Einstellungen</div>
  </div>
);

export default Menu;
