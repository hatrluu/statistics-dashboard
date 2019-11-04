import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  data = [];
  isLoaded = false;
  
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getUsersData().subscribe(res=>{
      if(res.length > 0){
        this.data = [
          {metric: 'Total Number of target applications', value: res[0], min: 50000, med: 150000,max: 500000},
          {metric: 'Average no of Entitlements per application	', value: res[1], min: 25, med: 100, max: 250},
          {metric: 'Maximum active users in a Single Target App	', value: res[2], min: 2, med: 5, max: 10},
          {metric: 'Average active user population per target app	', value: res[3], min: 2, med: 5, max: 10},
          {metric: '% Changes per day on each target application	', value: res[4], min: 5, med: 10, max: 20},
        ];
        this.isLoaded = true;
      }
    })
  }

}
