import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isShowModal : boolean = false // 


  constructor() { }

 // باز شدن مودال
  openModal () {
    this.isShowModal = true;
    //document.body.style.overflow = 'hidden';
  }

  //بستن مودال
  closeModal () {
    this.isShowModal = false;
    //document.body.style.overflow = 'visible';
  }

}
