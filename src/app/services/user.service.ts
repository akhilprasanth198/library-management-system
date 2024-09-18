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
    console.log(userobj);
    
    return this.http.post('https://localhost:7174/api/UserLogin/Login',userobj)

  }


}