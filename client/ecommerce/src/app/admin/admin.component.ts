import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  //Properties and Methods

  age = 11;
  address = 1000;
  title = "Good morning, Admin";
  pricePH = "Enter the price here...";
  abcText = "George W Bush";
  priceClass = "redborder";
  productClass = "";
  actor = "actor";



  printHi(){
    console.log('Hi!');
    this.priceClass = "blueborder";
  }

  alertSubmit(){
    alert('Submitted successfully!');
  }

  createCandyBorder(){
    this.productClass = "focusInput";
  }

  removeCandyBorder(){
    this.productClass = "";
  }

  getUsers(){

  }

  deleteUsers(){

  }



}
