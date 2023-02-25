import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { ProfileService } from '../profile/profile.service';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  newUsers : User[] =  [];



  constructor( private profile : ProfileService ) { }


  register (newUser : User) {
    this.profile.getUser(newUser);
    this.newUsers.push(newUser);
    console.log(this.newUsers)
  }


}
