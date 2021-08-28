import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user:Users[]=[];
  myUrl='api.github.com/users'

  token = `access_token = ${environment.accessToken}`
  constructor(private Http: HttpClient) { }
  findUser(){
    return new Promise((resolve, reject) => {
      this.user=[];
      this.Http.get(this.myUrl+this.token).toPromise().then(
        (data:any)=>{
          this.user.push(data);
          // resolve();
        },
        (error)=>{
     reject();
        }
      )
      
    })
  }
}
