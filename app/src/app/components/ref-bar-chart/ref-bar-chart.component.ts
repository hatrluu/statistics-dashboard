import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ref-bar-chart',
  templateUrl: './ref-bar-chart.component.html',
  styleUrls: ['./ref-bar-chart.component.css']
})
export class RefBarChartComponent implements OnInit {
  @Input() min;
  @Input() med;
  @Input() max;
  @Input() value;
  percentage: string;
  isString: boolean;
  constructor() { }

  ngOnInit() {
    this.isString = isNaN(this.value);
    if (this.isString) {
      this.min = this.min;
      this.med = this.med;
      this.max = this.max;
    } else {
      this.percentage = (this.value / this.max * 100).toFixed(2);
      this.value = parseFloat(this.value.toFixed(2));
      this.min = this.numberWithCommas(this.min);
      this.med = this.numberWithCommas(this.med);
      this.max = this.numberWithCommas(this.max);
    }
  }

  numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
