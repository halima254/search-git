import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:Users[]=[];
  constructor( public userNeeds:UsersService) { }
  findUser( provideUser:any){
    this.userNeeds.findUser(provideUser).then(
      (success)=>{
        this.user=this.userNeeds.user
      },
      (error)=>{
        return console.error;
        
      }
    )
  }

  ngOnInit(): void {
    this.findUser('halima254');
  }

}
