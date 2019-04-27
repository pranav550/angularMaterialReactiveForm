import { Component } from '@angular/core';
import {FormGroup,  FormBuilder,  NgForm, Validators} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-material';
  regiForm:FormGroup;
  firstname:string="";
  lastname:string="";
  address:string="";
  dob:string="";
  gender:string="";
  course:string;
  option:string=""
  email:string=""
constructor(private fb:FormBuilder){

  this.regiForm= fb.group({
    'firstname':[null, Validators.required],
    'lastname':[null, Validators.required],
    'address':[null, Validators.required],
    'dob':[null, Validators.required],
    'gender':[null, Validators.required],
    'course':[null, Validators.required],
    "option":[null, Validators.required],
    "email":[null, Validators.compose([Validators.required, Validators.email])],
     
  })

}

onFormSubmit(form:NgForm){
   console.log(this.regiForm)
}







}
