import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GridsterModule } from 'angular-gridster2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    GridsterModule 
  ],
  declarations: [   
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    GridsterModule 
  ]
})
export class SharedModule { }
