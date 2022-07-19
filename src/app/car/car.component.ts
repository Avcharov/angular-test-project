import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class Car implements OnInit {
  @Input() object: { name: string};


  @ContentChild('carHeading') carHeading : ElementRef;
  ngOnInit() {}
}
