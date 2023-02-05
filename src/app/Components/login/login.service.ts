import { Injectable } from '@angular/core';
import { loginFormModel } from 'src/app/model/loginFormModel';
import { RegisterService } from '../register/register.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private registerSer : RegisterService) { }

  login (model : loginFormModel) {

  }
}
