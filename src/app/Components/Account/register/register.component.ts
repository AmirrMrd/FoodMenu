import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {


constructor(public modal : ModalService , private accountSer : AccountService , private router : Router) {}

    registerForm = new FormGroup ({
      firstName : new FormControl(),
      lastName : new FormControl(),
      emailOrMobile : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl()
    });

  register () {
    const registerUser  = {
      firstName : this.registerForm.controls['firstName'].value,
        lastName : this.registerForm.controls['lastName'].value,
        emailOrMobile : this.registerForm.controls['emailOrMobile'].value,
        password : this.registerForm.controls['password'].value,
        confirmPassword : this.registerForm.controls['confirmPassword'].value, 
    }
    this.accountSer.registerUSer(registerUser).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);  
      },
      complete() {
        console.log("Ok Req");
      },
    });
    this.registerForm.reset();
    this.router.navigate(['../login']);
  }

  backToLoginForm () {
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }
}
