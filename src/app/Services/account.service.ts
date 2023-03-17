import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  protected apiUrl : string;

  constructor(private http : HttpClient) {
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
  
}
