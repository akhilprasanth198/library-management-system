import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  onRegisterSubmit(regobj:any){
    console.log(regobj);
    return this.http.post('https://localhost:7174/api/UserRegister',regobj)

  }
}
