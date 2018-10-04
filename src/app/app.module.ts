import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router'
import { HttpModule, Http } from '@angular/http'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { environment } from '../environments/environment.prod';
import { HomeComponent } from './home/home.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BgNavbarComponent,
    SignupComponent,
    LoginComponent,
    MyOrdersComponent,
    ManageOrdersComponent,
    AdminProductsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    

    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([{ path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'my/orders', component: MyOrdersComponent },
    { path: 'admin/orders', component: ManageOrdersComponent },
    { path: 'admin/products', component: AdminProductsComponent }])

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
