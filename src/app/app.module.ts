import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule} from '@angular/router'

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { environment } from '../environments/environment.prod';
import { HomeComponent } from './home/home.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BgNavbarComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([{path:'',component:HomeComponent}])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
