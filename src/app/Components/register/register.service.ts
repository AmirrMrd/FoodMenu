import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  newUsers : User[] =  [];



  constructor() { }


  register (newUser : User) {
    this.newUsers.push(newUser);
    console.log(this.newUsers)
  }


}
