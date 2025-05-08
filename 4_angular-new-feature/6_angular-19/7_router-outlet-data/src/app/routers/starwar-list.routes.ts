import { Routes } from '@angular/router';
import StarwarsListComponent from '../components/starwars-list.component';

const starWarsListRoutes: Routes = [
    {
        path: '',
        component: StarwarsListComponent,
    }
];

export default starWarsListRoutes;
