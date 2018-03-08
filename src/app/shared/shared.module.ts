import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { RouterModule } from '@angular/router';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridsterModule,
    RouterModule,
    HttpClientJsonpModule
  ],
  declarations: [
    SafeHtmlPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridsterModule,
    RouterModule,
    HttpClientJsonpModule,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
