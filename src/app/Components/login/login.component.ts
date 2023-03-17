import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { User } from 'src/app/model/User';

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



  constructor ( private router : Router, private accountSer : AccountService)  {  }
  
  ngOnInit () { } 


  public login () {
    const emailOrMobile = this.loginForm.controls['emailOrMobile'].value;
    const password = this.loginForm.controls['password'].value;
    this.accountSer.loginUser(emailOrMobile , password).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("OK");
      },
    });
  }
 



  public register () {
    this.router.navigate(['/register'])
    // this.modal.isShowLoginModal = false;
    // this.modal.isShowRegisterModal = true;
  }

  }
  
  
  


