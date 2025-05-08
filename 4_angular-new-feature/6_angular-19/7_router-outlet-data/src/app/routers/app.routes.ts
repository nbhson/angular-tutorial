import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'starwars',
        title: 'Star Wars List',
        loadChildren: () => import('./starwar-list.routes')
    },
    {
        path: '**',
        redirectTo: 'starwars',
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'starwars'
    }
];
