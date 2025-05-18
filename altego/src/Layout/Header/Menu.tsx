// Menu.tsx  – NEUE KOMPONENTE  |  nur relevante Abschnitte
import React from 'react';
import HologramPanel from './HologramPanel';
import { NavLink } from 'react-router-dom';
import type { MenuItem } from '../../Data/MenuData';

interface MenuProps {
    data: readonly MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ data }) => (
    <div className="flex-row metall" style={{ height: 40, margin: 0, width: '100%' }}>
        {data.map(({ title, entries }) => (
            <HologramPanel
                key={title}
                title={title}
                panelWidth={180}
            >
                <div style={{ padding: 10, textAlign: 'left' }}>
                    {entries.map(({ label, to }) => (
                        <NavLink key={to} to={to} className="blue-bg outlined-text">
                            {label}<br />
                        </NavLink>
                    ))}
                </div>
            </HologramPanel>
        ))}
    </div>
);

export default Menu;
