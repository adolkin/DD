import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from './../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { EditModule } from './edit/edit.module';
import { ViewModule } from './view/view.module';
import { MemberModule } from './member/member.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ViewModule,
    EditModule,
    MemberModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'drag-drop'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
