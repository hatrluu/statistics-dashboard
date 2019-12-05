import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessionsList = [];
  isLoaded = false;
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.loadSessions();
  }
  loadSessions(){
    this.webService.getSessions().toPromise().then(res=>{
      this.sessionsList = res;
      this.isLoaded = true;
    })
  }
  onDelete(sessionID){
    this.webService.deleteSession(sessionID).toPromise().then(res=>{
      console.log(res);
    })
    // .subscribe(res=>{
    //     delete this.sessionsList[this.sessionsList.findIndex(session=>session.sessionID == sessionID)];
    // })
  }
}
