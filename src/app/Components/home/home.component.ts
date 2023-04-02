import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userEmail : string | null = '';
  constructor (private router : ActivatedRoute) {}

  ngOnInit(): void {
    this.athLogin()
  }

  athLogin () {
    const useremail = localStorage.getItem('email');
    console.log(useremail);
    
    this.userEmail = useremail;
  //   console.log(useremail);
    
  //  const user =  this.router.snapshot
  //      .queryParams['user'];
  //   if ( user == null) {
  //     console.log("User Not Exist");
  //   }
  //   else 
  //   {
  //     this.userEmail = user;
  //     console.log(user)
  //   }
  }

  
  

}
 