import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { SettingComponent } from './core/components/setting/setting.component';

const routes: Routes = [
  { path: '', redirectTo: 'setting', pathMatch: 'full' },
  { path: 'setting', component: SettingComponent},
  { path: 'view', redirectTo: 'view'},
  { path: 'edit', redirectTo: 'edit'}, 
  { path: '**', component: ErrorPageComponent } 
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
