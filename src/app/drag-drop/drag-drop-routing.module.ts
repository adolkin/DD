import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DragDropComponent } from './drag-drop.component';


const dragDropRoutes = [
  { path: 'dragdrop', component: DragDropComponent }
]

@NgModule({
  imports: [RouterModule.forChild(dragDropRoutes)],
  exports: [RouterModule]
})
export class DragDropRoutingModule { }
