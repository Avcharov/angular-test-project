import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCar implements OnInit {
  carName = '';
  carStat = true;
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, carStatus:boolean }>();
 
  constructor() {}

  ngOnInit() {}

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
      carStatus: this.carStat
    });
    this.carName = '';
  }
}
