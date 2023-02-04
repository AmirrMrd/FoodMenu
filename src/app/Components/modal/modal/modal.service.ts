import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isShowModal : boolean = false

  public isShowLoginModal : boolean = false;

  public isShowRegisterModal : boolean = false;

  constructor() { }

 // باز شدن مودال
  public openModal () {
    this.isShowModal = true;
    this.isShowLoginModal = true;
    document.body.style.overflow = 'hidden';
  }

  //بستن مودال
  public closeModal () {
    this.isShowModal = false;
    this.isShowRegisterModal = false;
    document.body.style.overflow = 'visible';
  }

}
