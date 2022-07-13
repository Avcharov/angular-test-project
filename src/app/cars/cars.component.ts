import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class Cars {
  name = '';
  year = 2015;
  inputText = '';
  carz: { name: string; year: number }[] = [
    {
      name: 'Mers',
      year: 2018,
    },
    {
      name: 'Audi',
      year: 2014,
    },
    {
      name: 'Volvo',
      year: 2014,
    },
  ];
constructor(){
  
}
  addCar() {
    this.carz.push({
      name:this.name,
      year: this.year
    })
    this.name = '';
    this.year = 2015;
  }
}
