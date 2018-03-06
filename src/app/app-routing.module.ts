import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { SettingComponent } from './core/components/setting/setting.component';
import { WeatherComponent } from '@shared/components/weather/weather.component';

import { AuthGuardService } from '@services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuardService] },
  { path: 'weather', component: WeatherComponent },
  { path: '**', component: ErrorPageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
