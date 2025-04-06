import { Routes } from '@angular/router';
import { PhotoListComponent } from './components/photolist/photolist.component';
import { PhotoDetailComponent } from './components/photodetail/photodetail.component';

export const routes: Routes = [
    {
        path: '',
        component: PhotoListComponent,
        title: 'Photo list',
      },
      {
        path: 'photos/:id',
        component: PhotoDetailComponent,
        title: 'Photo detail',
      },
];
