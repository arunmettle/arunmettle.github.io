import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['',[Validators.required]]
    });
  }

  onSubmit(){
    if(this.signInForm.valid){
      console.log(this.signInForm);
      if(this.signInForm.invalid){
        return;
      }
    }
  }

  get f(){return this.signInForm.controls;}

}
