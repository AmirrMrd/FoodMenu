import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 public user : User = {
  firstName : '',
  lastName : '',
  emailOrMobile : '',
  password : '',
  confirmPassword : ''
 }

  constructor( public profile : ProfileService ) {
  }

  ngOnInit(): void { 
    this.user = this.profile.userExist;
    console.log("get user in ts Ok");
    console.log(this.user);
    console.log("ngOninit get user OK")
  }


  // public getuserExist() {
  //   this.user = this.profile.userExist;
  //   console.log("get user in ts Ok");
  //   console.log(this.user);

  // }


}
