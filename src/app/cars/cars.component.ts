import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class Cars implements OnInit {
  constructor() {}

  cars: { name: string, carStatus: boolean }[] = [
    {
      name: 'Mers',
      carStatus: true
    },
    {
      name: 'Audi',
      carStatus: true},
    {
      name: 'BMW',
      carStatus: true
    },
  ];
  ngOnInit() {}

  updated(car: { name: string, carStatus:boolean }) {
    this.cars.push(car);
  }

 
}
