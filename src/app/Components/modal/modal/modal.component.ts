import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  showModal : boolean = false;

  constructor(private el : ElementRef , public show : ModalService) {}

  ngOnInit () {
  }


}
