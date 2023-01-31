import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showModal : boolean = false;

  openModal () {
    this.showModal = !this.showModal;
  }
}
