import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  navList = [];
  active = false;
  constructor(public router: Router,
              private generalService: GeneralService) {}

  ngOnInit() {
    this.router.config.forEach(nav=>{
      if(nav.data && nav.data.routeName){
        this.navList.push({link:nav.path, label: nav.data.routeName, img: `assets/${nav.path}-logo.png`});
      }
    })
  }

  handleClick(e){
    this.active = !this.active;
    this.onSelect.emit(e);
    this.generalService.getHeader(e);
  }

}
