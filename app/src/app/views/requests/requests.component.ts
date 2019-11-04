import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  data = [];
  isLoaded = false;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getRequestsData().subscribe(res=>{
      if(res.length > 0){
        this.data = [
          {metric: 'Self Service Operations per day', value: res[0], min: 100, med: 500,max: 1000},
          {metric: 'Number of Admin Operations Per day', value: res[2], min: 40, med: 200, max: 400},
          {metric: 'Number of requests per day', value: res[3], min: 50, med: 200, max: 1000},
          {metric: 'Number of Approvals per day', value: res[4], min: 20, med: 100, max: 300},
        ]
        this.isLoaded = true;
      }
    })
  }

}
