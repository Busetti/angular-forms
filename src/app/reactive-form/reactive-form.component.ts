import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  cartPizzas: any[] = [];
  customer: any;
  customerPhone: any;
  constructor(public fb: FormBuilder) { }

  customerDetails = this.fb.group({
    fullName: [null, Validators.required],
    phoneNumbers: this.fb.array([
      this.fb.control(['', Validators.minLength(10)])
    ]),
    address: [null, Validators.compose([
      Validators.required, Validators.minLength(10)])]
  });

  pizzadetails = this.fb.group({
    selectedPizza: null,
    pizzas: [null, Validators.required],
    toppings: this.fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    })
  });
  ngOnInit(): void {
  }


  submit(){
    console.log(this.pizzadetails.value);
    this.cartPizzas.push(this.pizzadetails.value);
  }

  submitCustomerDetails(){
    console.log(JSON.stringify(this.customerDetails.value));
    this.customer = (this.customerDetails.value);
    this.customerPhone = JSON.parse(JSON.stringify(this.customer.phoneNumbers))
  }

  get phoneNumbers() {
    return this.customerDetails.get('phoneNumbers') as FormArray;
  }

  addPhoneNumbers() {
    this.phoneNumbers.push(this.fb.control(['', Validators.minLength(10)]));
  }

  deletePhoneNumber(i:number){
    const fa = (this.customerDetails.get('phoneNumbers') as FormArray);
    fa.removeAt(i);
    if(fa.length===0) this.addPhoneNumbers();
  }

  pizzas = [
    {name: 'Pepperoni Max'},
    {name: 'Taco Pizza'},
    {name: 'Chicken Fajita'},
    {name: 'Veggie Max'},
  ];
}
