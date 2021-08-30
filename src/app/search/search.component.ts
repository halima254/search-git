import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  seeUser: any;
  @Output()
  searchEmitter = new EventEmitter <any>();
   provideUser(){
     this.searchEmitter.emit(this.seeUser);
   }


  ngOnInit(): void {
  }

}
