import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
  }

  //chiamata http get per prendere l'utente con un certo nickname DA COMPLETARE
  getUser() : Promise <{data : user[]}>{
    return this.http.get<{data:user[]}>('/api/items/user?filter[nickname]=crisuo').toPromise();
  }

  createUser(user){
    return this.http.post('/api/items/user', user).toPromise();
  } 


}
