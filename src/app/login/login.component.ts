import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { UserModel } from '../Model/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userModel:UserModel;
  constructor() { }

  ngOnInit() {
  }

}
