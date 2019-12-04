import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
    
  }

  deleteSession(sessionID){
    console.log(sessionID);
  }
}
