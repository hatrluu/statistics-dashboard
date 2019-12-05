import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  @Input() data;
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  deleteSession(sessionID){
    this.onDelete.emit(sessionID);
  }
}
