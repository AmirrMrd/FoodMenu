import { Injectable } from '@angular/core';
import { loginFormModel } from 'src/app/model/loginFormModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  users : loginFormModel[] = []

  login (model : loginFormModel) {
    this.users.push(model)
    console.log(this.users)
  }
}
