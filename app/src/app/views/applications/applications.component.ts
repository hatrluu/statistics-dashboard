import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  data = [];
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getApplicationsData().subscribe(res=>{
      this.data = [
        {metric: 'Total Number of target applications', value: res[0], min: 5, med: 15,max: 30},
        {metric: 'Average no of Entitlements per application	', value: res[1], min: 10000, med: 20000, max: 30000},
        {metric: 'Maximum active users in a Single Target App	', value: res[2], min: 10000, med: 100000, max: 300000},
        {metric: 'Average active user population per target app	', value: res[3], min: 5000, med: 50000, max: 100000},
        {metric: '% Changes per day on each target application	', value: res[4], min: 1, med: 1, max: 1},
      ]
    })
  }

}
