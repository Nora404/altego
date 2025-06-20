import { lazy } from 'react';

export const routes = [
    { path: '/', name: 'Home', component: lazy(() => import('./pages/news/current/News')) },
    { path: '/home', name: 'MobileHome', component: lazy(() => import('./pages/home/Home')) },
    { path: '/news', name: 'News', component: lazy(() => import('./pages/news/current/News')) },
    { path: '/news/archiv', name: 'Archiv', component: lazy(() => import('./pages/news/archiv/Archiv')) },
    // …weitere einfach anhängen
] as const;
