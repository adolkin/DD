import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DragDropComponent } from './drag-drop.component';


const dragDropRoutes = [
  {
    path: 'dragdrop', component: DragDropComponent,
    children: [
      { path: '', redirectTo: 'page1', pathMatch: 'full'},
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(dragDropRoutes)],
  exports: [RouterModule]
})
export class DragDropRoutingModule { }
