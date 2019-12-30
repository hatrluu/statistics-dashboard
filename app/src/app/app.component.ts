import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { fader } from './route-animations';
import { RouterOutlet, Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader]
})
export class AppComponent implements OnInit {
  title = 'Statistics Dashboard';
  headerTitle = '';
  constructor(private generalService: GeneralService, private router: Router) {}
  ngOnInit() {
    // this.generalService.getHeader('Users');
    var currentPath = window.location.pathname.split('/')[2].replace('\-',' ').split(' ');
    for(let i = 0; i<currentPath.length-1; i++){
      currentPath[i] = currentPath[i].slice(0,1).toUpperCase()+currentPath[i].slice(1);
    }
    if(this.headerTitle == ''){
      this.headerTitle = currentPath.join(' ');
    }
  }
  getHeader(event){
    this.headerTitle = event;
  }
  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRoute && outlet.activatedRouteData.animation;
  }
}
