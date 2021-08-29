import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
person:Users[]=[];
  constructor( public userNeeds:UsersService) { }
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
  
  }

  ngOnInit(): void {
    this.createUser('halima254');
  }

}
