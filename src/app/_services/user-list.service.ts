import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  configUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }

  getUserList() {
    return this.httpClient.get(this.configUrl);
  }
}
