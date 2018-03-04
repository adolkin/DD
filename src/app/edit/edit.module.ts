import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EditRoutingModule } from './edit-routing.module';

import { ModalComponent } from './modal/modal.component';
import { Page1EditComponent } from './page1-edit/page1-edit.component';
import { Page2EditComponent } from './page2-edit/page2-edit.component';

@NgModule({
  imports: [
    SharedModule,
    EditRoutingModule
  ],
  declarations: [ 
    ModalComponent, 
    Page1EditComponent, 
    Page2EditComponent
  ]
})
export class EditModule { }
