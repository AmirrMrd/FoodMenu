import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  
  @Output() user: EventEmitter<User> = new EventEmitter();
  protected apiUrl : string;

  constructor(private http : HttpClient , private router : Router) {
    this.apiUrl = environment.baseUrl;
   }

  getAllUser<User> () : Observable<any> {
    return this.http.get<User>(this.apiUrl , httpOptions);
  }

  getUserById<User> (id : string) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url, httpOptions);
  }

  registerUSer<User> (data : User) : Observable<any> {
    const userJson = JSON.stringify(data);
    return this.http.post<User>(this.apiUrl,userJson,httpOptions);
  }

  loginUser<User> (email : string , password : string): Observable<any> {
    // const emailJson = JSON.stringify(email);
    // const passwordJson = JSON.stringify(password);
    const url = `${this.apiUrl}/${email}/${password}`;
    return this.http.get<User>(url);
  }

  getUserByUsername<User> (email : string): Observable<any> {
    // const emailJson = JSON.stringify(email);
    // const passwordJson = JSON.stringify(password);
    const url = `${this.apiUrl}/${email}`;
    return this.http.get<User>(url);
  }
  
  loginIn(data : number , emailOrMobile : string) {
    if(data == 1) {
      this.router.navigateByUrl('');
      this.getUserByUsername(emailOrMobile).subscribe((data) => {
        this.user.emit(data);
      })
    }
    else return console.log("Not access");
    
  }
}
