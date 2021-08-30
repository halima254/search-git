import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { RepositoriesService } from '../repositories.service';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
person:Users[]=[];
repo: Repositories[]=[];
  constructor( public userNeeds:UsersService, public repoService:RepositoriesService) { }
  createUser( seeUser:any){
    this.userNeeds.findUser(seeUser).then(
      (success)=>{
        this.person=this.userNeeds.user
        console.log(this.person);
      },
      (error)=>{
        return console.error;
        
      }
    )
this.repoService.findRepos(seeUser).subscribe(data=>{
  this.repo = data;
  return(this.repo);
})
  
  }

  ngOnInit(): void {
    this.createUser('halima254');
  }

}
