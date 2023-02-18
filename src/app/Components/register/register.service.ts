import { Injectable } from '@angular/core';
import { IUser } from 'src/app/model/IUser';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  newUsers : IUser[] =  [];



  constructor() { }


  register (userSubmit : IUser) {
    this.newUsers.push(userSubmit);
    console.log(this.newUsers)
  }


}
