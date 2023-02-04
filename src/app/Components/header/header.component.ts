import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (public modal : ModalService) {}


  
}
