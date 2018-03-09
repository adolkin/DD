import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardService } from '@services/dashboard.service';
import { AuthGuardService } from '@services/auth-guard.service';
import { TimeGuardService } from '@services/time-guard.service';
import { AuthService } from '@services/auth.service';
import { SettingService } from '@services/setting.service';
import { LocationService } from '@services/location.service';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ErrorPageComponent, 
    SettingComponent,
  ],
  providers: [
    DashboardService,
    AuthService,
    AuthGuardService,
    TimeGuardService,
    SettingService,
    LocationService
  ]
})
export class CoreModule { }
