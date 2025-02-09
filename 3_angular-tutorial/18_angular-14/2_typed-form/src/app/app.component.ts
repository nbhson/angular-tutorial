import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signUpFormGroup!: FormGroup<SignUpForm>;

  ngOnInit(): void {
    this.signUpFormGroup = new FormGroup<SignUpForm>({
      name: new FormControl('Son Nguyen', {nonNullable: true}),
      email: new FormControl('nbhson43@gmail.com')
    });;

    this.signUpFormGroup.setValue({name: 'Phương Trinh', email: 'phuongtrinh@gmail.com'})
    this.signUpFormGroup.controls['name'].reset(); // default: null => nonNullable: Son Nguyen
    let form = this.signUpFormGroup.value;
    console.log(form.email);
    console.log(form.name);
  }
}

interface SignUpForm {
  name:  FormControl<string | null>;
  email: FormControl<string | null>;
}
