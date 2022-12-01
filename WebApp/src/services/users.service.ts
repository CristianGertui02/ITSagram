import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
  }

  getAllUser() : Promise<{data : user[]}> {
    return this.http.get<{data:user[]}>('/api/items/user').toPromise();
  }
}
