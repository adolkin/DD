import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../core/services/InMemoryDbService';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { SharedModule } from './../shared/shared.module';

import { DragDropComponent } from './drag-drop.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    DragDropRoutingModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true })
  ],
  declarations: [DragDropComponent, ModalComponent]
})
export class DragDropModule { }
