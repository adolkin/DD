import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardService } from '@services/dashboard.service';
import { NavigationService } from '@services/navigation.service';
import { WeatherService } from '@services/weather.service';
import { AuthGuardService } from '@services/auth-guard.service';
import { AuthService } from '@services/auth.service';

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
    NavigationService,
    WeatherService,
    AuthService,
    AuthGuardService
  ]
})
export class CoreModule { }
