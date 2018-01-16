import { DashboardService } from './services/dashboard.service';
import { BoxService } from './services/box.service';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  imports: [
  ],
  declarations: [ErrorPageComponent],
  providers: [
    BoxService,
    DashboardService
  ]
})
export class CoreModule { }
