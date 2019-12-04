import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data = [];
  isLoaded = false;
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getUsersData().subscribe(res => {
      if (res.length > 0) {
        this.data = [
          {metric: 'Total Number of Active users in the system', value: res[1], min: 50000, med: 150000, max: 500000},
          {metric: 'Concurrent logins at peak usage time', value: 0, min: 25, med: 100, max: 250},
          {metric: 'Average number of Applications per active user', value: res[2], min: 2, med: 5, max: 10},
          {metric: 'Average number of Roles per active user', value: res[3], min: 2, med: 5, max: 10},
          {metric: 'Average number of Entitlements per active user', value: res[4], min: 5, med: 10, max: 20},
        ];

        this.isLoaded = true;
      }
    });
  }

}
