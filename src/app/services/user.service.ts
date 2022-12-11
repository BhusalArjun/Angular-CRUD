import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersListResponseModel } from '../users/models/user-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlEndPoint: string = 'users';
  baseUrl: string = environment.baseUrl;
  
  constructor(
    private httpClient: HttpClient
  ) { }

  addUsers(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl.concat(this.apiUrlEndPoint), user);
  }

  listAllUsers(): Observable<UsersListResponseModel[]> {
    return this.httpClient.get<UsersListResponseModel[]>(this.baseUrl.concat(this.apiUrlEndPoint));
  }

  getUserDetailsById(id: any): Observable<UsersListResponseModel> {
    return this.httpClient.get<UsersListResponseModel>(this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id));
  }

  onEditUser(data: UsersListResponseModel, userId: any): Observable<UsersListResponseModel>{
    return this.httpClient.put<UsersListResponseModel>(this.baseUrl.concat(this.apiUrlEndPoint.concat('/' + userId)), data);
  }
 onDeleteUser(id: number): Observable<any> {
  return this.httpClient.delete<UsersListResponseModel>(environment.baseUrl + 'users' + `${id}`);
 }
}