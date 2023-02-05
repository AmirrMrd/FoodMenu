import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { FormGroup , FormControl, Validators, EmailValidator } from '@angular/forms';
import { loginFormModel } from 'src/app/model/loginFormModel';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public _loginFormModel: loginFormModel = new loginFormModel;

  constructor (private modal : ModalService , private loginSer : LoginService) {}

  loginForm = new FormGroup({
    emailOrMobile : new FormControl('' , Validators.minLength(4)),
    password : new FormControl ()
  });



  login (data : FormGroup) {   
    this._loginFormModel.emailOrMobile = this.loginForm.controls['emailOrMobile'].value;
    this._loginFormModel.password = this.loginForm.controls['password'].value;
    this.loginSer.login(this._loginFormModel);
    this.loginForm.reset();
    this.modal.isShowModal = false;
  }
 



  register () {
    this.modal.isShowLoginModal = false;
    this.modal.isShowRegisterModal = true;
  }

  }
  
  
  


