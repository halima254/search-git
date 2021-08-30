import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { RepositoriesService } from '../repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo:Repositories[]=[];
  constructor(public repoService:RepositoriesService) { }
 
createUser(seeUser:any){
  this.repoService.findRepos(seeUser).subscribe(data=>{
    this.repo = data;
    return(this.repo);
  })
}

  ngOnInit(): void {
    this.createUser("halima254")
  }

}
