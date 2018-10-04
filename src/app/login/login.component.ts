import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { UserModel } from '../Model/UserModel';
import {AngularFireAuth} from 'angularfire2/auth'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 userModel:UserModel;
  constructor(private afAuth:AngularFireAuth) { 
    
  }

 
loginwithGmail(){
  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
 }
}
