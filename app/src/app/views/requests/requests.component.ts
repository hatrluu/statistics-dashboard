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
    this.webService.getRequestsData().subscribe(res => {
      if (res.length > 0) {
        this.data = [
          {metric: 'Self Service Operations Per Day', value: res[0], min: 100, med: 500, max: 1000},
          {metric: 'Average Number of Admin Operations Per Day', value: res[1], min: 40, med: 200, max: 400},
          {metric: 'Average Number of Requests Per Day', value: res[2], min: 50, med: 200, max: 1000},
          {metric: 'Average Number of Approvals Per Day', value: res[3], min: 20, med: 100, max: 300}
        ];
        this.isLoaded = true;
      }
    });
  }

}
