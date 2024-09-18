import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //write a function to call api and pass username and password

  onLoginSubmit(userobj:any)
  {
    return this.http.post('https://localhost:7174/api/Users',userobj)

  }
  //if the api returns success we let the user ti the system
  //otherwise provide and alert/error message

}