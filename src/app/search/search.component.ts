import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  findUser: any;
  @Output()
  searchEmmiter = new EventEmitter <any>();
   provideUser(){
     this.searchEmmiter.emit(this.provideUser);
   }


  ngOnInit(): void {
  }

}
