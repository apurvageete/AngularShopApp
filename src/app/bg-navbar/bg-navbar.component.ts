import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent {

  user$: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }


  logout() {
    this.afAuth.auth.signOut();
  }

}
