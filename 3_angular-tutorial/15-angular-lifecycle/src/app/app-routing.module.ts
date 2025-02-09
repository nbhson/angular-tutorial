import { NgAfterViewNgAfterViewCheckedComponent } from './ng-after-view-ng-after-view-checked/ng-after-view-ng-after-view-checked.component';
import { NgAfterContentInitNgAfterContentCheckedComponent } from './ng-after-content-init-ng-after-content-checked/ng-after-content-init-ng-after-content-checked.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgOnInitNgOnDestroyComponent } from './ng-on-init-ng-on-destroy/ng-on-init-ng-on-destroy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgOnChangesNgDoCheckComponent } from './ng-on-changes-ng-do-check/ng-on-changes-ng-do-check.component';

const routes: Routes = [
  {path: 'ngOnInit-ngOnDestroy', component: NgOnInitNgOnDestroyComponent},
  {path: 'ngOnChanges-ngDoCheck', component: NgOnChangesNgDoCheckComponent},
  {path: 'ngContent', component: NgContentComponent},
  {path: 'ngAfterContentInit-ngAfterContentChecked', component: NgAfterContentInitNgAfterContentCheckedComponent},
  {path: 'ngAfterView-ngAfterViewChecked', component: NgAfterViewNgAfterViewCheckedComponent},
  {path: '**', component: NgOnInitNgOnDestroyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
