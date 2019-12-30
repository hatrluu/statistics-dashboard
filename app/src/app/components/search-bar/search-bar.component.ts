import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchValue = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  search(event){
    var value = event.target.value;
    this.searchValue.emit(value);
  }
}
