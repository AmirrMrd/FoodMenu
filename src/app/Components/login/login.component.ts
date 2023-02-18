import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { FormGroup , FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { RegisterService } from '../register/register.service';
import { IUser } from 'src/app/model/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  selectedEmail : string | undefined = '';
  
  userRegisteredOk : IUser | undefined;

  userr : IUser = {
    firstName : '',
    lastName : '',
    emailOrMobile : '',
    password : '',
    confirmPassword : ''
   }

   
  constructor (private modal : ModalService , private loginSer : LoginService , private reGister : RegisterService) {}

  ngOnInit () {}

  
  loginForm = new FormGroup({
    emailOrMobile : new FormControl(),
    password : new FormControl ()
  });

  

   
   
  login () {   
    this.userr.emailOrMobile = this.loginForm.controls['emailOrMobile'].value;
    this.userr.password = this.loginForm.controls['password'].value;
    this.loginSer.login(this.userr);
    // console.log(this.user)
    this.loginForm.reset();
    this.modal.isShowModal = false;
  }
 



  register () {
    this.modal.isShowLoginModal = false;
    this.modal.isShowRegisterModal = true;
  }

  }
  
  
  


