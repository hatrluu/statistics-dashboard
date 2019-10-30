import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLabel:string;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.headerLabel.subscribe(label => this.headerLabel = label);
  }

}
