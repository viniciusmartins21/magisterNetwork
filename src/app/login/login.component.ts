import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin ()

  constructor(
    private authService: 
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {


  }

}
