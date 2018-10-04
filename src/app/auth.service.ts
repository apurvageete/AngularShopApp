import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {

  }
  createUser(formData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
  }


  // login(loginType,formData?) {
  //   if(formData) {
  //     return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
  //   } else {
  //     let loginMethod;
  //     if(loginType == 'FB') { loginMethod = new firebase.auth.FacebookAuthProvider(); }
  //     if(loginType == 'GOOGLE')  { loginMethod = new firebase.auth.GoogleAuthProvider()}
  //     return this.afAuth.auth.signInWithRedirect(loginMethod)
  //   }
  // }

 
  redirectLogin() {
    return this.afAuth.auth.getRedirectResult();
  }

  logout(){
    window.localStorage.removeItem("displayName");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("picture");
    return this.afAuth.auth.signOut();
  }

}
