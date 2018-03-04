import { Dashboard2Service } from './services/dashboard2.service';
import { DashboardService } from './services/dashboard.service';
import { BoxService } from './services/box.service';
import { NavigationService } from './services/navigation.service';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  imports: [
  ],
  declarations: [ErrorPageComponent, SettingComponent],
  providers: [
    BoxService,
    DashboardService,
    Dashboard2Service,
    NavigationService
  ]
})
export class CoreModule { }
