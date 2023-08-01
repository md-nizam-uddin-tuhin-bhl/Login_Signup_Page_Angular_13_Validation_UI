import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl:any = "http://localhost:5127/api/Users/"
  constructor(private http:HttpClient) { }
  SignUp(userObj:any){
    return this.http.post<any>(this.baseUrl+'register',userObj)
  }
  logIn(logObj:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}authenticate`,logObj)
  }
}
