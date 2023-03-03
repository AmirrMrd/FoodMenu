import { Injectable } from '@angular/core';
import { RegisterService } from '../register/register.service';
import { User } from 'src/app/model/User';
import { ModalService } from '../modal/modal/modal.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userOk: boolean = false;

  public emailOk?: string = "";


  constructor(private register: RegisterService, private modal: ModalService, private router: Router) { }


  ngOnInit() { }


  


  public login(data: User) {
    const users = this.register.newUsers.find(x => x.emailOrMobile === data.emailOrMobile);
    if (users) {
      console.log("Ok");
      console.log("OK state");
      this.emailOk = users.emailOrMobile;
      this.router.navigate(['/profile']);
    }

    else {
      console.log("Not Ok");
    }

  }
}

