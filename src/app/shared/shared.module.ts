import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridsterModule,
    RouterModule
  ],
  declarations: [
    SafeHtmlPipe,
    WeatherComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridsterModule,
    RouterModule,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
