import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repositories } from './repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
repo:Repositories[]=[];
myUrl='https://api.github.com/users/'

token = `?access_token=${environment.accessToken}`;
  constructor(public Http:HttpClient) { }

findRepos(seeUser:any):Observable<any>{
  return this.Http.get(this.myUrl+seeUser+"/repos"+this.token)
}

}
