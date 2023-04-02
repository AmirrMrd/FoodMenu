import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ProfileService } from './profile.service';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Users : User[] = []
  constructor( public profile : ProfileService , private accountSer : AccountService ) {
  }

  ngOnInit(): void { 
    this.accountSer.getAllUser().subscribe(data => {
      this.Users = data;
      console.log(this.Users);
    });
  }


  // public getuserExist() {
  //   this.user = this.profile.userExist;
  //   console.log("get user in ts Ok");
  //   console.log(this.user);

  // }


}
