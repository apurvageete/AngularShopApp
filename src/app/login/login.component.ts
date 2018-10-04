import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { UserModel } from '../Model/UserModel';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  userModel: UserModel;
  error: any
  socialAuth: boolean = false;

  constructor(public authservices: AuthService, private afAuth: AngularFireAuth, private _router: Router) {

  }


  // loginwithGmail(){
  //   this.auth.login();
  //  }
  loginEmail(formData){
    alert("error  nfldfdlf;")
    return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
  }


  ngOnInit() {
    if (environment.socialAuthEnabled) {
      this.socialAuth = true; // show Google and FB Sign in only when social auth is enabled
    }
  }
  ngAfterViewInit() {
    this.getAuthStatus();
    if (this.afAuth.authState) {
      this._router.navigate(['/login']);
    }
  }

  
  // login(loginType, formData?) {
  //   this.authservices.login(loginType, formData)
  //   .then(
  //     (success) => {
  //       if(formData) {
  //         window.localStorage.setItem("email",formData.email);
  //       }
  //       console.log(success);
  //       this._router.navigate(['/home']);
  //     }).catch(
  //     (err) => {
  //       this.error = err;
  //     })
  //   ;
  // }
  //  
  getAuthStatus() {
    this.authservices.redirectLogin().then(function (result) {
      if (result.credential) {
        window.localStorage.setItem("displayName", result.user.displayName);
        window.localStorage.setItem("email", result.user.email);
        window.localStorage.setItem("picture", result.user.photoURL);
        //console.log(result)
      }
    }).catch(
      (err) => {
        this.error = err;
      })
  }

  logout() {
    this.authservices.logout()
      .then(
        (success) => {
          this._router.navigate(['/login']);
        }).catch(function (error) {
          console.log(error);
        })
  }


}
