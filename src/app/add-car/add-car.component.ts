import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCar  {
  CarName = '';
  CarYear = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{name:string, year: number}>();
  constructor() { }

  addCar(){
    this.carEmitter.emit({
      name:this.CarName,
      year: this.CarYear
    });

    this.CarName = '';
    this.CarYear = 2017;
  }
  

}