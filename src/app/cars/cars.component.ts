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
      name: 'One',
      carStatus: true
    },
    {
      name: 'Two',
      carStatus: true
    },
    {
      name: 'Three',
      carStatus: true
    },
  ];
  ngOnInit() {}

  updated(car: { name: string, carStatus:boolean }) {
    this.cars.push(car);
  }

  switchBuy(car:{name:string,carStatus:boolean}){
car.carStatus = !car.carStatus;
  }
  switchSell(car:{name:string,carStatus:boolean}){
    car.carStatus = !car.carStatus;
      }
 
}
