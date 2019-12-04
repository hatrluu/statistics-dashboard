import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessionsList = [];

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getSessions().subscribe(res=>{
      this.sessionsList = res;
    })
  }

}
