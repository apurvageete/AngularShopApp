import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Model/UserModel';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userModel:UserModel;
  constructor() { }

  ngOnInit() {
  }

}
