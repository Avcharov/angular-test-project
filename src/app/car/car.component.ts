import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class Car implements OnInit {
  @Input() object :{name:string,year:number};

  ngOnInit() {
  }

}