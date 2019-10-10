import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }
  saveCard(value) {
    const card = {
      text: value,
      user_id:'3'
    } 
    console.log(card)
    return this.httpClient.post('http://localhost:9000/api/board/card/create',card);
  }

  login(user) {
    return this.httpClient.post('http://localhost:9000/api/user/signin',user);
    // console.log(user.email)
  }

  createUser(user) {
    console.log(user);
    return this.httpClient.post('http://localhost:9000/api/user/signup',user);
    
    

    
  }
 
}
