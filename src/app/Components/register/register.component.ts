import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(public modal : ModalService , private registerSer : RegisterService) {}

  userRegister : User = {
    firstName : '',
    lastName : '',
    emailOrMobile : '',
    password : '',
    confirmPassword : ''

  }


    registerForm = new FormGroup ({
      firstName : new FormControl(),
      lastName : new FormControl(),
      emailOrMobile : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl()
    })

  register (registerForm : FormGroup) {
    this.userRegister.firstName = this.registerForm.controls['firstName'].value;
    this.userRegister.lastName = this.registerForm.controls['lastName'].value;
    this.userRegister.emailOrMobile = this.registerForm.controls['emailOrMobile'].value;
    this.userRegister.password = this.registerForm.controls['password'].value;
    this.userRegister.confirmPassword = this.registerForm.controls['confirmPassword'].value;
    this.registerSer.register(this.userRegister);
    console.log(this.userRegister)
    this.registerForm.reset();
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }



  backToLoginForm () {
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }
}
