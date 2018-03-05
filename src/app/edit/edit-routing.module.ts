
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1EditComponent } from './page1-edit/page1-edit.component';
import { Page2EditComponent } from './page2-edit/page2-edit.component';

const editRoutes: Routes = [
  {
    path: 'edit',
    children: [
      { path: '', redirectTo: 'page1', pathMatch: 'full'},
      { path: 'page1', component: Page1EditComponent },
      { path: 'page2', component: Page2EditComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(editRoutes)]
})
export class EditRoutingModule { }
