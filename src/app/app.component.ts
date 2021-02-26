import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
gender =['male','female'];
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
  
}
