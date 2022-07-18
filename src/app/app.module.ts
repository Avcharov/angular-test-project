import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BackgroundDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
