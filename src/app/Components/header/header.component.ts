import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal/modal.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor (public modal : ModalService , public login : LoginService , private router : Router) {}

  ngOnInit () {
  }
  
}
