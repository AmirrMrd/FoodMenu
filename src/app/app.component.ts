import { Component, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from './Components/modal/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
  title = 'angularStore';

  constructor(public modal: ModalService, public el: ElementRef) {
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'overflow : hidden';
    document.body.appendChild(elemDiv);
    
    
  }


  ngOnDestroy(): void { }

  

}


