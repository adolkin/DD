import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from './../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module';
import { DragDropModule } from './drag-drop/drag-drop.module';
import { CoreModule } from './core/core.module';
import { EditModule } from './edit/edit.module';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DragDropModule,
    CoreModule,
    ViewModule,
    EditModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'drag-drop'),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
