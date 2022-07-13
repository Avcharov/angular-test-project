import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class Cars {
  name = '';
  year = 2017;

  carz: { name: string; year: number }[] = [
    {
      name: 'Ford',
      year: 2015,
    },
    {
      name: ,
      year: 2010,
    },
    {
      name: 'Audi',
      year: 2018,
    },
  ];

  constructor() {}

  addCar() {
    this.carz.push({
      name: this.name,
      year: this.year,
    });
    this.name = '';
    this.year = 2017;
  }
}
