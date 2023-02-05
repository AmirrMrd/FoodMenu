import { Injectable } from '@angular/core';
import { registerFormModel } from 'src/app/model/registerFormModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  newUsers : registerFormModel[] = [];

  constructor() { }


  register (model : registerFormModel) {
    this.newUsers.push(model);
    console.log(this.newUsers);
  }
}
