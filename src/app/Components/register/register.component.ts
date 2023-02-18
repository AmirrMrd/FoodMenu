import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { IUser } from 'src/app/model/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(public modal : ModalService , private registerSer : RegisterService) {}

  userSubmit : IUser = {
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

  register () {
    this.userSubmit.firstName = this.registerForm.controls['firstName'].value;
    this.userSubmit.lastName = this.registerForm.controls['lastName'].value;
    this.userSubmit.emailOrMobile = this.registerForm.controls['emailOrMobile'].value;
    this.userSubmit.password = this.registerForm.controls['password'].value;
    this.userSubmit.confirmPassword = this.registerForm.controls['confirmPassword'].value;
    this.registerSer.register(this.userSubmit);
    console.log(this.userSubmit)
    this.registerForm.reset();
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }



  backToLoginForm () {
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }
}
