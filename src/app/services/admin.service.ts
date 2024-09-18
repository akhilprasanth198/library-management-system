import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  onLoginSubmit(adminobj:any)
  {
    console.log(adminobj);
    return this.http.post('https://localhost:7174/api/Login/Login',adminobj)

  }

}