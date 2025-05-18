import { lazy } from 'react';

export const routes = [
    { path: '/', name: 'Home', component: lazy(() => import('./Pages/News/Current/News')) },
    { path: '/news', name: 'News', component: lazy(() => import('./Pages/News/Current/News')) },
    { path: '/news/archiv', name: 'Archiv', component: lazy(() => import('./Pages/News/Archiv/Archiv')) },
    // …weitere einfach anhängen
] as const;
