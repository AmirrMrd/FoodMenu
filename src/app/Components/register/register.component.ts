import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(public modal : ModalService) {}

  backToLoginForm () {
    this.modal.isShowRegisterModal = false;
    this.modal.isShowLoginModal = true;
  }
}
