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
  myUrl='https://api.github.com/users/'

  token = `?access_token=${environment.accessToken}`;
  constructor(private Http: HttpClient) { }



  findUser(seeUser:any){
    interface data{
      login:any;
      avatar_url:any;
      public_repos: any;
      followers: any;
      following:any;
      name: any;
      created_at: any;
      updated_at: any;
    }
    return new Promise <void>((resolve, reject) => {
      this.user=[];
      this.Http.get <data>(this.myUrl+seeUser+this.token).toPromise().then(
        
        (data:any)=>{
          this.user.push(data);
          resolve();
          console.log(data);
        },
        (error)=>{
     reject(error)
        }
      )
      
    })
  }
}
