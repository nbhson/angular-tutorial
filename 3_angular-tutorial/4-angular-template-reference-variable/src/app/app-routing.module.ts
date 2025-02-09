import { ViewchildDirectivesComponent } from './viewchild-directives/viewchild-directives.component';
import { ViewchildMetadataComponent } from './viewchild-metadata/viewchild-metadata.component';
import { ViewchildDomTemplateComponent } from './viewchild-dom-template/viewchild-dom-template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewchildDomComponentComponent } from './viewchild-dom-component/viewchild-dom-component.component';

const routes: Routes = [
  {path: 'dom-template', component: ViewchildDomTemplateComponent},
  {path: 'dom-component', component: ViewchildDomComponentComponent},
  {path: 'metadata', component: ViewchildMetadataComponent},
  {path: 'directives', component: ViewchildDirectivesComponent},
  {path: '**', component: ViewchildDomTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
