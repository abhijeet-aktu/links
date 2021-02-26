import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
    status ='';
  gender =['Male','Female','Other'];
user={username:'',email:''}
  @ViewChild('f') signupForm:NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form:NgForm){
  //   console.log(form.value)
  // }
  onSubmit(){
    this.user.username = this.signupForm.value.username;
    this.user.email=this.signupForm.value.password;
    
    this.signupForm.reset();
    
  }
  call(){
this.status = "true";
  }
}
