import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { fader } from './route-animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader]
})
export class AppComponent implements OnInit {
  title = 'Statistics Dashboard';
  constructor(private generalService: GeneralService) {}
  ngOnInit() {
    this.generalService.getHeader('Users');
  }
  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRoute && outlet.activatedRouteData.animation;
  }
}
