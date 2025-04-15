import { Component } from '@angular/core';
import { ConditionStatementsComponent } from './components/condition-statements/condition-statements.component';

@Component({
  selector: 'app-root',
  imports: [ConditionStatementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '2_built-in-control-flow';
}
