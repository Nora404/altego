// Menu.tsx  – NEUE KOMPONENTE  |  nur relevante Abschnitte
import React from 'react';
import HologramPanel from './HologramPanel';

type MenuItem = { title: string; entries: string[] };

interface MenuProps {
    data: MenuItem[];
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
                    {entries.map((e) => (
                        <div key={e} className="blue-bg outlined-text">
                            {e}
                        </div>
                    ))}
                </div>
            </HologramPanel>
        ))}
    </div>
);

export default Menu;
