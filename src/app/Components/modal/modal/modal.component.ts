import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean = false; 


  constructor(private el : ElementRef) {
  }

  
  ngOnInit () {
    document.body.appendChild(this.el.nativeElement);


  }

  open () {

    this.show = !this.show
  }

  
  close () {
    this.show = !this.show;
}
}
