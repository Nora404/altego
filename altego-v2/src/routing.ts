import { lazy } from 'react';

export const routes = [
    { path: '/', name: 'Home', component: lazy(() => import('./pages/home/Home')) },
    { path: '/home', name: 'MobileHome', component: lazy(() => import('./pages/home/Home')) },
    { path: '/news', name: 'News', component: lazy(() => import('./pages/news/current/News')) },
    { path: '/article/:id', name: 'Articel', component: lazy(() => import('./pages/news/NewsArticel')) },
    { path: '/news/archiv', name: 'Archiv', component: lazy(() => import('./pages/news/archiv/Archiv')) },

    { path: '/games/x1', name: 'X1', component: lazy(() => import('./pages/games/X1Start')) },
    { path: '/games/x2', name: 'X2', component: lazy(() => import('./pages/games/X2Start')) },
    { path: '/games/x3', name: 'X3', component: lazy(() => import('./pages/games/X3Start')) },
    { path: '/games/x4', name: 'X4', component: lazy(() => import('./pages/games/X4Start')) },

] as const;
