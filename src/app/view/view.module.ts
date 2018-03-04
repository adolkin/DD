import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ViewRoutingModule } from './view-routing.module';

import { Page1ViewComponent } from './page1-view/page1-view.component';
import { Page2ViewComponent } from './page2-view/page2-view.component';

@NgModule({
  imports: [
    SharedModule,
    ViewRoutingModule
  ],
  declarations: [Page1ViewComponent, Page2ViewComponent]
})
export class ViewModule { }
