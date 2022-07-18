import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective implements OnInit {
  constructor(private elementP: ElementRef) {}
  ngOnInit() {
    this.elementP.nativeElement.style.backgroundColor = 'red';
  }
}
