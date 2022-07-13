import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Car } from './car/car.component';
import { Cars } from './cars/cars.component';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Car, Cars],
  bootstrap: [AppComponent],
})
export class AppModule {}
