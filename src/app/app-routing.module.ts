
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dragdrop', pathMatch: 'full' },
  { path: 'view', redirectTo: 'view'},
  { path: 'edit', redirectTo: 'edit'},
  { path: '**', component: ErrorPageComponent } 
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
