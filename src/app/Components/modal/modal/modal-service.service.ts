import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  isShow : boolean = false;

  
  constructor() { }


  show() {
    this.isShow = true;
  }
}
