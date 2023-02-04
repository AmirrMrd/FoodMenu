import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { FormGroup , FormControl } from '@angular/forms';
import { loginFormModel } from 'src/app/model/loginFormModel';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public _forms: loginFormModel = new loginFormModel;

  constructor (private modal : ModalService , private loginSer : LoginService) {}

  loginForm = new FormGroup({
    emailOrMobile : new FormControl(),
    password : new FormControl ()
  });



  login (data : FormGroup) {   
    this._forms._emailOrMobile = this.loginForm.controls['emailOrMobile'].value,
    this._forms._password = this.loginForm.controls['password'].value
    this.loginSer.login(this._forms)
    console.log(this._forms)
  }
 



  register () {
    this.modal.isShowLoginModal = false;
    this.modal.isShowRegisterModal = true;
  }

  }
  
  
  


