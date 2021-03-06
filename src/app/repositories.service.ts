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
// hide='Yl7oLv9Al7U124qaoy'
clientId = environment.clientId
clientSecretKey = environment.clientSecret

// token = `?access_token=${environment}${this.hide}`;
  constructor(public Http:HttpClient) { }

findRepos(seeUser:any):Observable<any>{
  return this.Http.get(this.myUrl+seeUser+"/repos?client_id ="+this.clientId+'&client_secret='+this.clientSecretKey)
}

}
