import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { FormGroup , FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { RegisterService } from '../register/register.service';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public loginForm = new FormGroup({
    emailOrMobile : new FormControl(),
    password : new FormControl ()
  });


  
  public member : User = {
    firstName :  '',
    lastName : '',
    emailOrMobile : '',
    password : '',
    confirmPassword : ''
  }


   
  constructor (private modal : ModalService , private loginSer : LoginService ,
     private reGister : RegisterService,
     private router : Router) {}

  ngOnInit () {}

  

   
   
  login (loginForm : FormGroup) {   
    
    
    // this.member.emailOrMobile = this.loginForm.controls['emailOrMobile'].value;
    // this.member.password = this.loginForm.controls['password'].value;
    this.loginSer.login(loginForm.value);
    this.loginForm.reset();
    this.modal.isShowModal = false;
  }
 



  register () {
    this.router.navigate(['/register'])
    // this.modal.isShowLoginModal = false;
    // this.modal.isShowRegisterModal = true;
  }

  }
  
  
  


