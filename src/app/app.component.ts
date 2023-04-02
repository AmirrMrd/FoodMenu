import { Component, ElementRef, OnChanges, OnDestroy , OnInit, SimpleChanges } from '@angular/core';
import { ModalService } from './Components/modal/modal/modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnChanges {
  

  title = 'angularStore';

  constructor(public modal: ModalService, public el: ElementRef , private router : ActivatedRoute) {
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'overflow : hidden';
    document.body.appendChild(elemDiv);
    
    
  }
  ngOnChanges() {
  }
  
  ngOnInit () {
  }
  

  ngOnDestroy(): void { }

  

}


