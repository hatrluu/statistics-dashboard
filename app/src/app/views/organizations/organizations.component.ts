import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  data = [];
  isLoaded = false;
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.data = [];
    this.webService.getOrganizationsData().subscribe(res => {
      this.data.push({metric: 'Total Number of Organizations', value: res, min: 1, med: 5, max: 20});
      this.isLoaded = true;
    });
  }

}
