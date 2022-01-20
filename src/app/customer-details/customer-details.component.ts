import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input()
  public parentForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  get phoneNumbers() {
    return this.parentForm.controls.customerDetails.get('phoneNumber') as FormArray;
  }

  addPhoneNumbers() {
    this.phoneNumbers.push(this.parentForm.controls.customerDetails);
  }

}
