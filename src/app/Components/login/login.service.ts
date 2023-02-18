import { Injectable } from '@angular/core';
import { RegisterService } from '../register/register.service';
import { IUser } from 'src/app/model/IUser';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userOk : boolean = false;

  constructor(private register : RegisterService) { }


  ngOnInit () {
  }




  login(user : IUser) {
    
  //  if ( user.emailOrMobile === this.userTrust.emailOrMobile ) {
  //   console.log("ok");
  //   this.userOk = true;

    
  //  }
  //  else 
  //  {
  //   this.userOk = false;
  //   console.log("Not Ath");
  //  }
  }
}

