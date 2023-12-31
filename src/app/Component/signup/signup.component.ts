import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateFrom from 'src/app/helpers/validFrom';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type:string = "password";
  isText:boolean=false;
  eyeIcon:string = "fa-eye-slash"
  signUpForm !:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fname :['',Validators.required],
      lname :['',Validators.required],
      email :['',Validators.required],
      username :['',Validators.required],
      password :['',Validators.required],
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type ="password"
  }
  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
      
    }
    else{
      ValidateFrom.validateAllFormFileds(this.signUpForm)
      alert("Your Form is Invalid");
    }
  }
 
}
