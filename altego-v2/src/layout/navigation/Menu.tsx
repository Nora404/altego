import React from 'react';
import HologramPanel from './HologramPanel';
import { NavLink } from 'react-router-dom';
import type { MenuItem } from '../../data/MenuData';

interface MenuProps {
    data: readonly MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ data }) => (
    <div>
        {data.map(({ title, entries }) => (
            <HologramPanel
                key={title}
                title={title}
                panelWidth={180}
            >
                {entries.map(({ label, to }) => (
                    <div className='navigation-entries'>
                        <NavLink key={to} to={to} className='outlined-text'>
                            {label}<br />
                        </NavLink>
                    </div>
                ))}
            </HologramPanel>
        ))}
    </div>
);

export default Menu;
