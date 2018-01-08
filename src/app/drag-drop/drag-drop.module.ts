import { NgModule } from '@angular/core';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { SharedModule } from './../shared/shared.module';

import { DragDropComponent } from './drag-drop.component';

@NgModule({
  imports: [
    DragDropRoutingModule,
    SharedModule
  ],
  declarations: [DragDropComponent]
})
export class DragDropModule { }
