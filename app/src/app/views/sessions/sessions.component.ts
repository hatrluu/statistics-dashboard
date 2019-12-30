import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessionsList = [];
  filteredList = [];
  isLoaded = true;
  // isLoaded = false;
  constructor(private webService: WebService) { }

  ngOnInit() {
    // this.loadSessions();
    this.sessionsList = [
      {userID: '12',identityDomain: '4',createTime: '7',timeoutInterval: '10',expiryTime: '13',credTimeoutInterval: '16'},
      {userID: '23',identityDomain: '5',createTime: '8',timeoutInterval: '11',expiryTime: '14',credTimeoutInterval: '17'},
      {userID: '34',identityDomain: '6',createTime: '9',timeoutInterval: '12',expiryTime: '15',credTimeoutInterval: '18'}
    ]
    this.filteredList = this.sessionsList
  }
  searchSession(value){
    if(value !== ''){
      var result = this.sessionsList.filter(function(session) {
        return String(session.userID).indexOf(value) == 0;
      });
      this.filteredList = result;
    } else {
      this.filteredList = this.sessionsList;
    }
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
