import { Component } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (public modal : ModalService) {}

}
