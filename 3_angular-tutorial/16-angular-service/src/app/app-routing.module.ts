import { MoviesComponent } from './component/movies/movies.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentParentComponent } from './component/component-parent/component-parent.component';

const routes: Routes = [
  {path: '', component: ComponentParentComponent},
  {path: 'movies', component: MoviesComponent},
  {path: '**', component: ComponentParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
