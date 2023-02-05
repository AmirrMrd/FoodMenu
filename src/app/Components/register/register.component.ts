import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { registerFormModel } from 'src/app/model/registerFormModel';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(public modal : ModalService , private registerSer : RegisterService) {}


    public _registerFormModel = new registerFormModel();

    registerForm = new FormGroup ({
      firstName : new FormControl(),
      lastName : new FormControl(),
      emailOrMobile : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl()
    })

  register (data : FormGroup) {
    this._registerFormModel.firstName = this.registerForm.controls['firstName'].value;
    this._registerFormModel.lastName = this.registerForm.controls['lastName'].value;
    this._registerFormModel.emailOrMobile = this.registerForm.controls['emailOrMobile'].value;
    this._registerFormModel.password = this.registerForm.controls['password'].value;
    this._registerFormModel.confirmPassword = this.registerForm.controls['confirmPassword'].value;
    this.registerSer.register(this._registerFormModel);
    this.registerForm.reset();
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }



  backToLoginForm () {
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }
}
