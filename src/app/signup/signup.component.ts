import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,15}$";
  submitted= false;

  ngOnInit(): void {
    this.signUpForm= this.fb.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(this.pwdPattern)]]
    },
    {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm);
      this.submitted= true;
      if(this.signUpForm.invalid){
        return;
      }
    }
  }

  get f() { return this.signUpForm.controls; }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  constructor(private fb: FormBuilder) { }

}
