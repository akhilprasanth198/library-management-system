import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  onLoginSubmit(adminobj:any)
  {
    return this.http.post('https://localhost:7174/api/Users/register',adminobj)

  }
  //if the api returns success we let the user ti the system
  //otherwise provide and alert/error message

}