import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EditRoutingModule } from './edit-routing.module';

import { Page1EditComponent } from './page1-edit/page1-edit.component';
import { Page2EditComponent } from './page2-edit/page2-edit.component';
import { EditContentComponent } from './edit-content/edit-content.component';

@NgModule({
  imports: [
    SharedModule,
    EditRoutingModule
  ],
  declarations: [ 
    Page1EditComponent, 
    Page2EditComponent, EditContentComponent
  ]
})
export class EditModule { }
