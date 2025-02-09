import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { TypeographyComponent } from './typeography/typeography.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatSlidenavComponent } from './mat-slidenav/mat-slidenav.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxRadiobuttonComponent } from './checkbox-radiobutton/checkbox-radiobutton.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'typeography', component: TypeographyComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'icon', component: IconComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'mat-slidenav', component: MatSlidenavComponent },
  { path: 'drop-down', component: DropDownComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'card', component: CardComponent },
  { path: 'tab', component: TabComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkbox-radio', component: CheckboxRadiobuttonComponent },
  { path: 'data-picker', component: DatePickerComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'scrolling', component: ScrollingComponent },
  { path: 'data-table', component: DataTableComponent },

  { path: '**', component: ButtonComponent },
  { path: '',   redirectTo: 'button', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
