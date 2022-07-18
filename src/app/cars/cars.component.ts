import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class Cars implements OnInit {

  constructor() { }
cars:{name:string,year:number}[]= [{
  name: 'Mers',
  year: 2020
},
{
  name: 'Audi',
  year: 2021
},
]
  ngOnInit() {
  }

}