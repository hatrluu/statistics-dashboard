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
    this.webService.getUsersData().subscribe(res => {
      if (res.length > 0) {
        this.data = [
          {metric: 'Certification Feature is Enabled or Disable', value: res[0], min: 'No', med: 'Yes', max: 'Yes'},
          {metric: 'Frequency of Certification Campaign in a Year', value: res[1], min: 'N/A', med: 2, max: 3},
          // {metric: 'Do you do manager certification?', value: res[2], min: 'N/A', med: 'Y', max: 'Yes'},
          {metric: 'Number of Managers in the system', value: res[3], min: 'N/A', med: 20000, max: 50000},
          // {metric: 'Do you do Role certification?', value: res[4], min: 'N/A', med: 'Y', max: 'Yes'},
          {metric: 'Number of roles being certified', value: res[4], min: 'N/A', med: 300, max: 500},
          {metric: 'Number of Role Certifier Users', value: res[4], min: 'N/A', med: 20, max: 40},
          // {metric: 'Do you do data owner certification?', value: res[4], min: 'N/A', med: 'No', max: 'Yes'},
          // {metric: 'How many Data Owners are there in the system?', value: res[4], min: 'N/A', med: 'N/A', max: 20000}
        ];
        this.isLoaded = true;
      }
    });
  }

}
