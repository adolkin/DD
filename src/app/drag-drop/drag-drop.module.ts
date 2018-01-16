import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../core/services/InMemoryDbService';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { SharedModule } from './../shared/shared.module';

import { DragDropComponent } from './drag-drop.component';
import { ModalComponent } from './modal/modal.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

@NgModule({
  imports: [
    DragDropRoutingModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true })
  ],
  declarations: [DragDropComponent, ModalComponent, Page1Component, Page2Component, Page3Component]
})
export class DragDropModule { }
