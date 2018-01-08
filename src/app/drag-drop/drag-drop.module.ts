import { NgModule } from '@angular/core';
import { DragDropComponent } from './drag-drop.component';
import { DragDropRoutingModule } from './drag-drop-routing.module';

@NgModule({
  imports: [
    DragDropRoutingModule
  ],
  declarations: [DragDropComponent]
})
export class DragDropModule { }
