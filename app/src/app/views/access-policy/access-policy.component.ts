import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-access-policy',
  templateUrl: './access-policy.component.html',
  styleUrls: ['./access-policy.component.css']
})
export class AccessPolicyComponent implements OnInit {
  data = [];
  isLoaded = false;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getAccessPoliciesData().subscribe(res => {
      if (res.length > 0) {
        this.data = [
          {metric: 'Total Number of Access Policies defined in OIM', value: res[0], min: 5, med: 20, max: 40},
          {metric: 'Average Application/Entitlement Associated per Access Policy', value: res[1], min: 5, med: 5, max: 5}
        ];
        this.isLoaded = true;
      }
    });
  }

}
