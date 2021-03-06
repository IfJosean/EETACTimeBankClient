import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from "../../models/user.model";

const url = 'users';
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) { }

  signIn$(username: string, password: string): Observable<any> {
    console.log(url);
    return this.http.post<any>(url + '/signin', { username, password });
  }

  signUp$(userData: any) {
    console.log(userData);
    return this.http.post<any>(url + '/signup', userData);
  }

  getUserWallet(id: string): Observable<any> {
    return this.http.post<any>(url + '/getUserById', { id });
  }

  getProfileUser$(name: string) {
    return this.http.get<User>(url + '/' + name);
  }

  updateProfileUser$(name: string, body: any) {
    return this.http.put<any>(url + '/' + name, body);
  }

  addchat$(json: any) {
    return this.http.post<any>(url + 'chats/add', json);
  }

  
}
