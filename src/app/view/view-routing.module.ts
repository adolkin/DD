import { Page1ViewComponent } from './page1-view/page1-view.component';
import { Page2ViewComponent } from './page2-view/page2-view.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeGuardService } from '@services/time-guard.service';

const viewRoutes: Routes = [
  {
    path: 'view',
    children: [
      { path: '', redirectTo: 'page1', pathMatch: 'full'},
      { path: 'page1', component: Page1ViewComponent, canActivate: [TimeGuardService] },
      { path: 'page2', component: Page2ViewComponent, canActivate: [TimeGuardService] },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)]
})
export class ViewRoutingModule { }
