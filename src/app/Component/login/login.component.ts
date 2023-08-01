import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import ValidateFrom from 'src/app/helpers/validFrom';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type:string = "password";
  isText:boolean=false;
  eyeIcon:string = "fa-eye-slash";
  loginForm !:FormGroup;
 
  constructor(private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type ="password"
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.logIn(this.loginForm.valid).subscribe({
        next:(res)=>{
          alert(res.message);
        },
        error:(err)=>{
          alert(err?.error.message);
        }
      })
      console.log(this.loginForm.value);
    }
    else{
      ValidateFrom.validateAllFormFileds(this.loginForm);
      alert("Your From is Invalid");
    }
  }
  
}
