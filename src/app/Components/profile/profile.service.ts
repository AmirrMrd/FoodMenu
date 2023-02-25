import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  public userExist : User = {
    firstName : '',
    lastName : '',
    emailOrMobile : '',
    password : '',
    confirmPassword : ''
}

  constructor() {  }


  public getUser (user : User) {
    this.userExist.emailOrMobile = user.emailOrMobile;
    this.userExist.firstName = user.firstName;
    this.userExist.lastName = user.lastName;
    this.userExist.password = user.password;
    this.userExist.confirmPassword = user.confirmPassword;
    console.log("service get user Ok");
  }
}
