import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dragdrop', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent } 
]

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
