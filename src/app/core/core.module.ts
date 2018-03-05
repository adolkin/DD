import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardService } from '@services/dashboard.service';
import { BoxService } from '@services/box.service';
import { NavigationService } from '@services/navigation.service';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ErrorPageComponent, 
    SettingComponent
  ],
  providers: [
    BoxService,
    DashboardService,
    NavigationService
  ]
})
export class CoreModule { }
