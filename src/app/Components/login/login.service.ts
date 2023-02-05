import { Injectable } from '@angular/core';
import { loginFormModel } from 'src/app/model/loginFormModel';
import { RegisterService } from '../register/register.service';
import { registerFormModel } from 'src/app/model/registerFormModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private registerSer : RegisterService) { }

  login (model : loginFormModel) {
    this.registerSer.newUsers.forEach(element => {
      element.emailOrMobile == 'amir'
      return console.log('ok')
    });
  }
}
