import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signUpFormGroup!: FormGroup<SignUpForm>;

  ngOnInit(): void {
    // nullable thì sẽ reset về null thay vì default value là string
    this.signUpFormGroup = new FormGroup<SignUpForm>({
      name: new FormControl('Son Nguyen', {nonNullable: false}),
      email: new FormControl('nbhson43@gmail.com'),
      password: new FormControl("", {validators: [Validators.required]})
    });

    this.signUpFormGroup.patchValue({
      name: 'Phương Trinh',
      email: 'phuongtrinh@gmail.com',
    })
    this.signUpFormGroup.controls['name'].reset(); // default: null => nonNullable: Son Nguyen
    let form = this.signUpFormGroup.value;
    console.log(form.email);
    console.log(form.name);
  }
}
// sử dụng interface để tránh form any "let form: any = this.signUpFormGroup.value;"
interface SignUpForm {
  name:  FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
