import { Component, ElementRef, Input, ContentChild } from '@angular/core';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class Car {
  //name = 'Ford';
  //year = 2017;
  @Input() carItem: { name: string; year: number };
  @ContentChild('carHeading') carHeading : ElementRef;

  ngAfterViewInit(){
     
  }
}
