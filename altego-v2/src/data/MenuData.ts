type MenuEntry = { label: string; to: string };

export type MenuItem = {
    title: string;
    entries: readonly MenuEntry[];
};

export const menuData = [
    {
        title: 'News',
        entries: [
            { label: 'Übersicht', to: '/home' },
            { label: 'Aktuell', to: '/news' },
            { label: 'Archiv', to: '/news/archiv' },
        ],
    },
    {
        title: 'Spiele',
        entries: [
            { label: 'X4', to: '/games/x4' },
            { label: 'X3', to: '/games/x3' },
            { label: 'X2', to: '/games/x2' },
            { label: 'X', to: '/games/x' },
        ],
    },
    {
        title: 'Community',
        entries: [
            { label: 'Forum', to: '/community/forum' },
            { label: 'Wiki', to: '/community/wiki' },
            { label: 'Links', to: '/community/links' },
            { label: 'Chat', to: '/community/chat' },
            { label: 'Developer Network', to: '/community/developer-network' },
        ],
    },
    {
        title: 'Downloads',
        entries: [{ label: 'Holo Text', to: '/downloads/holo-text' }],
    },
    {
        title: 'Hilfe',
        entries: [
            { label: 'Wiki DE', to: '/hilfe/wiki-de' },
            { label: 'Wiki EN', to: '/hilfe/wiki-en' },
            { label: 'FAQs', to: '/hilfe/faqs' },
            { label: 'Forum', to: '/hilfe/forum' },
        ],
    },
    {
        title: 'Shop',
        entries: [
            { label: 'English Shop', to: '/shop/en' },
            { label: 'Deutsch Shop', to: '/shop/de' },
        ],
    },
] as const;
