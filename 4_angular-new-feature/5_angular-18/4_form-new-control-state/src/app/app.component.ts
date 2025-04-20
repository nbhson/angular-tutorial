import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="submit()">
      <label for="first-name">First Name: </label>
      <input id="first-name" type="text" formControlName="firstName" />
      <label for="last-name">Last Name: </label>
      <input id="last-name" type="text" formControlName="lastName" />
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [``],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule]
})
export class AppComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();
  readonly EMPTY_STRING = '';
  
  profileForm = new FormGroup({
    firstName: new FormControl<string>(this.EMPTY_STRING, [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl<string>(this.EMPTY_STRING),
  });

  ngOnInit(): void {
    this.fromChange()
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

  submit() {
    console.log(this.profileForm);
  }

  private fromChange() {
    const firstName$ = this.f['firstName'].events.subscribe((event) => {
      const value = event.source.value as string;
      const status = event.source.status;

      console.log('Value changed to:', value);
      console.log('Control status changed to:', status);

      if (status === 'INVALID' && value.includes('1')) {
        // step 1 - override
        this.f['firstName'].setValidators([
          Validators.required,
          Validators.minLength(1)
        ]);

        // step 2 - update the validation state of the control 
        this.f['firstName'].updateValueAndValidity();
      }
    });

    this._subscription.add(firstName$);
  }

  get f() {
    return this.profileForm.controls;
  }
}
