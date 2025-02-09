import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

function getContact(): string {
  return 'nbhson43@gmail.com';
}

const routes: Routes = [
  {
    path: 'home/:id',
    component: HomeComponent,
    resolve: { contact: () => getContact() },
    data: {
      heroPower: 'Force',
    },
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
