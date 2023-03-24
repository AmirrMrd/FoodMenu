import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit , OnDestroy{

  public userLogined : any = '';
  constructor (private router : ActivatedRoute) {
    
  }



 
  ngOnInit () { 
    localStorage.getItem('email');
    console.log(localStorage); 
    this.userLogined = localStorage.getItem('email');
    const user = JSON.parse(this.userLogined)
    console.log(user);
   }
  


  ngOnDestroy() {
    localStorage.removeItem;
  }

}
