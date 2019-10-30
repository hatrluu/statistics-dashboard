import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navList = [];
  constructor(public router: Router,
              private generalService: GeneralService) {}

  ngOnInit() {
    this.navList  = [
      {label: 'Users', link:'/users'},
      {label: 'Roles', link:'/roles'},
      {label: 'Entitlement', link:'/entitlement'},
      {label: 'Applications', link:'/applications'},
      {label: 'Requests', link:'/requests'},
      {label: 'Certifications', link:'/certifications'},
      {label: 'Access Policy', link:'/access-policy'}
    ]
  }

  handleClick(e){
    this.generalService.getHeader(e);
  }

}
