import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class Cars implements OnInit {
  constructor() {}

  cars: { name: string }[] = [
    {
      name: 'Mers',
    },
    {
      name: 'Audi',
    },
    {
      name: 'BMW',
    },
  ];
  ngOnInit() {}

  updated(car: { name: string }) {
    this.cars.push(car);
  }

 
}
