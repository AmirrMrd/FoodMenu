import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AccountService } from 'src/app/Services/account.service';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  public loginForm = new FormGroup({
    emailOrMobile: new FormControl(),
    password: new FormControl()
  });


  public userEmail: string = '';
  public users: User[] = []

  constructor(private router: Router, private accountSer: AccountService , private http : HttpClient) { }




  ngOnInit() {
    
  }


  public submitForm() {
    const emailOrMobile = this.loginForm.controls['emailOrMobile'].value;
    const password = this.loginForm.controls['password'].value;
    this.accountSer.loginUser(emailOrMobile, password).subscribe((data) => {
      if (data == 1) {
        this.router.navigate(
          [''],
          { queryParams: { user: emailOrMobile } }
        )
      }
    });
    const emailJson = JSON.stringify(emailOrMobile);
    localStorage.setItem( 'email' , emailJson);
 
  //   console.log('name : ' , localStorage); 
  //   console.log('name : ' , localStorage); 
  }





  public register() {
    this.router.navigate(['/register'])
    // this.modal.isShowLoginModal = false;
    // this.modal.isShowRegisterModal = true;
  }

}





