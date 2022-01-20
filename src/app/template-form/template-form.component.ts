import { Component, OnInit } from '@angular/core';
import { SignupService } from '../template/signup.service';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  no: number;
  firstname:string = "";
  lastname:string = "";
  email: string;
  privacypolicy: boolean;
  username: string;
  password: string;
  formResponse: any;

  constructor(public signupservice: SignupService) { }

  ngOnInit(): void {
  }

  signup(formdata:any){
    console.log((formdata));
    this.formResponse = formdata.value;
    this.signupservice.insertData(this.formResponse).subscribe(res => {
      alert("Date inserted successfully");
    }, (error) => {
      alert("Date insert failed " + error);
    })
  }

}
