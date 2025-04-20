# Form’s new control state change events
Angular Form control introduces a new property called events, enabling subscription to a stream of events for form controls. This property facilitates easy tracking of form state changes such as value changes, touch state, pristine status, and control status.

Refer to the following code example.

```ts
const nameControl = new FormControl<string|null>('name', Validators.required);
nameControl.events.subscribe(event => {
  if (event.type === 'valueChange') {
    console.log('Value changed to:', event.value);
  } else if (event.type === 'statusChange') {
    console.log('Control status changed to:', event. Status);
  }
});
```

With this feature, developers can efficiently monitor and respond to various form control state changes, enhancing the overall form management experience in Angular apps.

## Reference 

<https://www.syncfusion.com/blogs/post/whats-new-in-angular-18>

<https://medium.com/@sivakishore.teru/angular-add-or-remove-validations-dynamically-to-a-formcontrol-formgroup-4ebd38fe0b98>


```ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-example',
  template: `
    <form [formGroup]="formGroup">
      <input type="text" formControlName="controlName">
      <button (click)="addValidation()">Add Validation</button>
      <button (click)="removeValidation()">Remove Validation</button>
    </form>
  `,
})
export class ExampleComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      controlName: ['', Validators.required]
    });
  }

  get controlName(): AbstractControl {
    return this.formGroup.get('controlName');
  }

  addValidation() {
    this.controlName.setValidators([Validators.required, Validators.minLength(5)]);
    this.controlName.updateValueAndValidity();
  }

  removeValidation() {
    this.controlName.setValidators(null);
    this.controlName.updateValueAndValidity();
  }
}
```