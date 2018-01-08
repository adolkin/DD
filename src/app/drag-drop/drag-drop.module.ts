import { NgModule } from '@angular/core';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { SharedModule } from './../shared/shared.module';

import { DragDropComponent } from './drag-drop.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    DragDropRoutingModule,
    SharedModule
  ],
  declarations: [DragDropComponent, ModalComponent]
})
export class DragDropModule { }
