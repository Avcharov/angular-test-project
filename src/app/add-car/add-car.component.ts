import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCar implements OnInit {
  carName = '';
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string }>();
 
  constructor() {}

  ngOnInit() {}

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
    });
    this.carName = '';
  }
}
